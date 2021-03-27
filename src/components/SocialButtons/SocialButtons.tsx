import bxlFacebookSquare from "@iconify/icons-bx/bxl-facebook-square";
import bxlInstagramAlt from "@iconify/icons-bx/bxl-instagram-alt";
import { Icon } from "@iconify/react";
import { ReactNode } from "react";
import styles from "./SocialButtons.module.scss";

interface SocialButtonProps {
  name: string;
  className?: string;
  href: string;
  children: ReactNode;
}

const SocialButton = (props: SocialButtonProps) => {
  const { name, href, className, children } = props;
  return (
    <a
      className={`${styles.sbIconWrapper} ${className}`}
      title={name}
      href={href}
    >
      {children}
    </a>
  );
};

const SocialButtons = () => {
  return (
    <div className={styles.container}>
      <SocialButton name="Facebook" className={styles.iconWrapper} href="#">
        <Icon icon={bxlFacebookSquare} />
      </SocialButton>
      <SocialButton name="Instagram" className={styles.iconWrapper} href="#">
        <Icon icon={bxlInstagramAlt} />
      </SocialButton>
    </div>
  );
};

export { SocialButtons };
