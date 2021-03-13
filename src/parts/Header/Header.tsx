import { Hero } from "../../components/Hero";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <Hero />
    </header>
  );
};

export { Header };
