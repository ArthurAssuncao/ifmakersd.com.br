import { ReactNode } from "react";
import { DarkModeButton } from "../../components/DarkThemeButton";
import { NavBar } from "../../components/NavBar";
import styles from "./Header.module.scss";

interface HeaderProps {
  children?: ReactNode;
}

const Header = (props: HeaderProps) => {
  const { children } = props;
  return (
    <header className={styles.container}>
      <NavBar>
        <DarkModeButton />
      </NavBar>

      {children}
    </header>
  );
};

export { Header };
