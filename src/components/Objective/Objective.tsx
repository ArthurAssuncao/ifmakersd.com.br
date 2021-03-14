import { ReactElement } from "react";
import styles from "./Objective.module.scss";

interface ObjectiveProps {
  icon: ReactElement;
  image: ReactElement;
  title: string;
  description: string;
}

const Objective = (props: ObjectiveProps) => {
  const { icon, image, title, description } = props;

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.image}>{image}</div>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export { Objective };
