import { ReactElement } from 'react';
import styles from './Objective.module.scss';

interface ObjectiveProps {
  icon: ReactElement;
  image: ReactElement;
  title: string;
  description: string;
}

const Objective = (props: ObjectiveProps): JSX.Element => {
  const { icon, image, title, description } = props;

  return (
    <div className={styles.container}>
      <div className={styles.iconImageWrapper}>
        <div className={styles.image}>
          <div className={styles.icon}>{icon}</div>
          {image}
        </div>
      </div>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

export { Objective };
