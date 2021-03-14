import { Header } from "../Header";
import { Objectives } from "../Objectives";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Objectives />
    </div>
  );
};

export { Home };
