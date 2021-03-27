import { Wave } from "../../components/Wave";
import styles from "./Section.module.scss";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  moreButton?: React.ReactNode;
  backgroundColor: "neutral" | "purple";
  className?: string;
}

const Section = (props: SectionProps) => {
  const { className, backgroundColor, children, title, moreButton } = props;

  return (
    <section
      className={`${styles.container} ${className}`}
      data-color={backgroundColor}
    >
      <Wave className={styles.wave} />
      <div className={styles.containerInner}>
        <h3 className={styles.title}>{title}</h3>
        {children}
        {moreButton && moreButton}
      </div>
    </section>
  );
};

export { Section };
