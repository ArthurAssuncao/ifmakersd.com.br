import { ReactNode } from "react";
import styles from "./Cards.module.scss";

interface CardsProps {
  title: string;
  children: ReactNode;
  className?: string;
}

const Cards = (props: CardsProps) => {
  const { className, title, children } = props;
  return (
    <section className={`${styles.container} ${className}`}>
      <div className={styles.containerInner}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.cards}>{children}</div>
      </div>
    </section>
  );
};

export { Cards };
