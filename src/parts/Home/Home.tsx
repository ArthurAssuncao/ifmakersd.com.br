import { Header } from "../Header";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export { Home };
