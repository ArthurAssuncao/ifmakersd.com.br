import { NextScript } from "next/document";
import React from "react";

type DocumentFiles = {
  sharedFiles: readonly string[];
  pageFiles: readonly string[];
  allFiles: readonly string[];
};

function dedupe<T extends { file: string }>(bundles: T[]): T[] {
  const files = new Set<string>();
  const kept: T[] = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) {
      continue;
    }
    files.add(bundle.file);
    kept.push(bundle);
  }
  return kept;
}

export class DeferredNextScript extends NextScript {
  getScripts(files: DocumentFiles) {
    return super.getScripts(files).map((script: JSX.Element) => {
      return React.cloneElement(script, {
        // eslint-disable-next-line @typescript-eslint/tslint/config
        key: script.props.src,
        defer: true,
        async: false,
      });
    });
  }
  getDynamicChunks(files: DocumentFiles) {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString,
    } = this.context;

    return dedupe(dynamicImports).map((bundle) => {
      let modernProps = {};
      if (process.env.__NEXT_MODERN_BUILD) {
        modernProps = bundle.file.endsWith(".module.js")
          ? { type: "module" }
          : { noModule: true };
      }

      if (
        !bundle.file.endsWith(".js") ||
        files.allFiles.includes(bundle.file)
      ) {
        return null;
      }

      return (
        <script
          defer={true}
          key={bundle.file}
          src={`${assetPrefix}/_next/${encodeURI(
            bundle.file
          )}${devOnlyCacheBusterQueryString}`}
          nonce={this.props.nonce}
          crossOrigin={
            this.props.crossOrigin || process.env.__NEXT_CROSS_ORIGIN
          }
          {...modernProps}
        />
      );
    });
  }
}
