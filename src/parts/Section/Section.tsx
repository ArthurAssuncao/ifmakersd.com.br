import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  moreButton?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { children, title, moreButton } = props;

  return (
    <section className={styles.container}>
      <Wave className={styles.wave} />
      <div className={styles.containerInner}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.cards}>{children}</div>
        {moreButton && moreButton}
      </div>
    </section>
  );
};

export { Section };