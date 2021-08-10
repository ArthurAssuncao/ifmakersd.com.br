import { ReactNode } from 'react';
import styles from './Cards.module.scss';

interface CardsProps {
  children?: ReactNode;
}

const Cards = (props: CardsProps): JSX.Element => {
  const { children } = props;
  return <div className={styles.cards}>{children}</div>;
};

export { Cards };
