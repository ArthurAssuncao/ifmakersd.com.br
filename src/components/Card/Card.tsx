import { LazyLoadImage } from "react-lazy-load-image-component";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./Card.module.scss";

interface ItemCard {
  slug: string;
  imageUrl: string;
  title: string;
  description: string;
  href: string;
}

interface CardProps {
  item: ItemCard;
}

const Card = (props: CardProps) => {
  const { item } = props;
  const { src } = ImageUrl.generateCardSrcMedia(item.imageUrl);

  return (
    <article className={styles.container}>
      <a href={item.href} title={item.title}>
        <LazyLoadImage
          wrapperClassName={styles.imageWrapper}
          className={styles.image}
          alt={item.title}
          effect="blur"
          src={src}
        />
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              <header>
                <h5 className={styles.title}>{item.title}</h5>
              </header>
              <div className={styles.description}>{item.description}</div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};

export { Card };
export type { ItemCard };
