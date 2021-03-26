import { ReactNode } from "react";
import { Wave } from "../../components/Wave";
import styles from "./Footer.module.scss";

interface FooterProps {
  children?: ReactNode;
}

const Footer = (props: FooterProps) => {
  const { children } = props;
  return (
    <footer className={styles.container}>
      <Wave className={styles.wave} />
      <h3 className={styles.title}>Entre em contato com nossa equipe</h3>
      {children}
    </footer>
  );
};

export { Footer };
