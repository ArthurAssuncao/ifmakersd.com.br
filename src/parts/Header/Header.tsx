import { DarkModeButton } from "../../components/DarkThemeButton";
import { Hero } from "../../components/Hero";
import { NavBar } from "../../components/NavBar";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <DarkModeButton />
      <NavBar />
      <Hero />
    </header>
  );
};

export { Header };
