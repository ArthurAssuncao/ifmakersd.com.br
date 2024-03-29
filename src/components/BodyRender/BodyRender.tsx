import {
  documentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer';
import {
  Block,
  BLOCKS,
  Document,
  Inline,
  MARKS,
} from '@contentful/rich-text-types';
import HTMLParse from 'html-react-parser';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';
import Loader from '../../services/Loader';
import styles from './BodyRender.module.scss';

interface BodyProps {
  body: Document;
}

const RenderBold = (text: ReactNode) => <strong>{text}</strong>;

const RenderCode = (embedded: ReactNode) => (
  <div className={styles.embeddedWrapper}>
    {HTMLParse(
      embedded
        ? embedded
            ?.toString()
            ?.split('youtube.com/watch?v=')
            .join('youtube.com/embed/')
        : ''
    )}
  </div>
);

const RenderUlList = (node: ReactNode, children: ReactNode): ReactNode => (
  <ul>{children}</ul>
);

const RenderOlList = (node: ReactNode, children: ReactNode): ReactNode => (
  <ol>{children}</ol>
);

const RenderParagraph = (node: ReactNode, children: ReactNode): ReactNode => (
  <p>{children}</p>
);

const RenderH1 = (node: ReactNode, children: ReactNode): ReactNode => (
  <h3>{children}</h3>
);

const RenderH2 = (node: ReactNode, children: ReactNode): ReactNode => (
  <h4>{children}</h4>
);

const RenderEmbeddedAsset = (node: Block | Inline): ReactNode => {
  const { title, description, file } = node.data.target.fields;
  const mimeType = file.contentType;
  const mimeGroup = mimeType.split('/')[0];

  const fixUrlImage = (urlImage: string): string => {
    if (urlImage.startsWith('//')) {
      return `https:${urlImage}`;
    }
    return urlImage;
  };

  switch (mimeGroup) {
    case 'image':
      return (
        <figure
          style={
            {
              '--img-caption-content': description ? '' : 'none',
            } as CSSProperties
          }
        >
          <Image
            title={title ? title : null}
            alt={description ? description : null}
            src={fixUrlImage(file.url)}
            width={640}
            height={480}
            loader={Loader.imageLoader}
          />
          {description ? <figcaption>{description}</figcaption> : null}
        </figure>
      );
    case 'application':
      return (
        <a title={description ? description : null} href={file.url}>
          {title ? title : file.details.fileName}
        </a>
      );
    default:
      return (
        <span style={{ backgroundColor: 'red', color: 'white' }}>
          {' '}
          {mimeType} embedded asset{' '}
        </span>
      );
  }
};

const BodyRender = (props: BodyProps): JSX.Element => {
  const { body } = props;
  const optionsContentfulRender: Options = {
    renderMark: {
      [MARKS.BOLD]: RenderBold,
      [MARKS.CODE]: RenderCode,
    },
    renderNode: {
      [BLOCKS.UL_LIST]: RenderUlList,
      [BLOCKS.OL_LIST]: RenderOlList,
      [BLOCKS.PARAGRAPH]: RenderParagraph,
      [BLOCKS.HEADING_1]: RenderH1,
      [BLOCKS.HEADING_2]: RenderH2,
      [BLOCKS.EMBEDDED_ASSET]: RenderEmbeddedAsset,
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
