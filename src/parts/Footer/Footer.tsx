import { ReactNode } from 'react';
import { ContactForm } from '../../components/ContactForm';
import { Copyright } from '../../components/Copyright';
import { SocialButtons } from '../../components/SocialButtons';
import { Wave } from '../../components/Wave';
import styles from './Footer.module.scss';

interface FooterProps {
  children?: ReactNode;
}

const Footer = (props: FooterProps): JSX.Element => {
  const { children } = props;
  return (
    <footer className={styles.container}>
      <Wave className={styles.wave} />
      <h3 className={styles.title}>Entre em contato com nossa equipe</h3>
      <ContactForm />
      <SocialButtons />
      <Copyright />
      {children}
    </footer>
  );
};

export { Footer };
