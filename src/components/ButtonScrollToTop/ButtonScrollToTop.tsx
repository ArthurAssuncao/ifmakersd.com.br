import arrowUpAlt2 from "@iconify/icons-dashicons/arrow-up-alt2";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import styles from "./ButtonScrollToTop.module.scss";

const ButtonScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    const viewportHeight = window.innerHeight;
    const limitHeight = viewportHeight / 2;

    if (!showScroll && window.pageYOffset > limitHeight) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= limitHeight) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div
      className={`${styles.container} ${
        showScroll ? styles.show : styles.hidden
      }`}
      onClick={scrollTop}
    >
      <Icon
        icon={arrowUpAlt2}
        className={styles.icon}
        aria-label="Botão scroll para cima"
      />
    </div>
  );
};

export { ButtonScrollToTop };
