import { DarkModeButton } from '../../components/DarkThemeButton';
import { NavBar } from '../../components/NavBar';
import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.container}>
      <NavBar>
        <DarkModeButton />
      </NavBar>
    </header>
  );
};

export { Header };
