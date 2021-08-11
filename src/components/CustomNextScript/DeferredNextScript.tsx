import { NextScript } from 'next/document';
import React from 'react';

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
  getScripts(files: DocumentFiles): JSX.Element[] {
    return super.getScripts(files).map((script: JSX.Element) =>
      React.cloneElement(script, {
        key: script.props.src,
        defer: true,
        async: false,
      })
    );
  }

  getDynamicChunks(files: DocumentFiles): (JSX.Element | null)[] {
    const { dynamicImports, assetPrefix, devOnlyCacheBusterQueryString } =
      this.context;

    const newDynamicImports: {
      file: string;
    }[] = dynamicImports.map((item) => ({ file: item }));

    return dedupe(newDynamicImports).map((bundle) => {
      let modernProps = {};
      if (process.env.__NEXT_MODERN_BUILD) {
        modernProps = bundle.file.endsWith('.module.js')
          ? { type: 'module' }
          : { noModule: true };
      }

      if (
        !bundle.file.endsWith('.js') ||
        files.allFiles.includes(bundle.file)
      ) {
        return null;
      }

      return (
        <script
          defer
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
