import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, Document, MARKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";
import ReactHtmlParser from "react-html-parser";
import styles from "./BodyRender.module.scss";

interface BodyProps {
  body: Document;
}

const BodyRender = (props: BodyProps) => {
  const { body } = props;
  const optionsContentfulRender: Options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
      [MARKS.CODE]: (embedded: ReactNode) =>
        ReactHtmlParser(embedded ? embedded?.toString() : ""),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: ReactNode, children: ReactNode) => (
        <p>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node: ReactNode, children: ReactNode) => (
        <h3>{children}</h3>
      ),
      [BLOCKS.HEADING_2]: (node: ReactNode, children: ReactNode) => (
        <h4>{children}</h4>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node.data.target.fields);
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType;
        const mimeGroup = mimeType.split("/")[0];

        switch (mimeGroup) {
          case "image":
            return (
              <figure>
                <img
                  title={title ? title : null}
                  alt={description ? description : null}
                  src={file.url}
                />
                {description ? <figcaption>{description}</figcaption> : null}
              </figure>
            );
          case "application":
            return (
              <a title={description ? description : null} href={file.url}>
                {title ? title : file.details.fileName}
              </a>
            );
          default:
            return (
              <span style={{ backgroundColor: "red", color: "white" }}>
                {" "}
                {mimeType} embedded asset{" "}
              </span>
            );
        }
      },
      // [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      //   const fields = node.data.target.fields;
      //   switch (node.data.target.sys.contentType.sys.id) {
      //     case 'blockquote':
      //       return <div>
      //         <BlockQuote quoteText={fields.quoteText['pt-BR']} quoter={fields.quoter['pt-BR']}/>
      //       </div>
      //     default:
      //       return <div>??????????????? {title} </div>

      //   }
      // },
      // }
    },
  };
  return (
    <div className={styles.container}>
      {documentToReactComponents(body, optionsContentfulRender)}
    </div>
  );
};

export { BodyRender };
