import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  href: string;
  backgroundColor: "purple" | "neutral";
}

const Button = (props: ButtonProps) => {
  const { text, href, backgroundColor } = props;

  return (
    <a
      className={styles.container}
      data-bg={backgroundColor}
      href={href}
      title={text}
    >
      {text}
    </a>
  );
};

export { Button };
export type { ButtonProps };
