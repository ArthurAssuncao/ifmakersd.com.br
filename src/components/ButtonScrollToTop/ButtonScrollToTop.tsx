import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';
import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import styles from './ButtonScrollToTop.module.scss';

interface ButtonScrollToTopProps {
  className?: string;
}

const ButtonScrollToTop = (props: ButtonScrollToTopProps): JSX.Element => {
  const { className } = props;

  const [showScroll, setShowScroll] = useState(false);
  let buttonRef = useRef<HTMLDivElement | null>(null);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const setShowScrollCheck = (value: boolean) => {
      if (
        value !== showScroll ||
        value !== Boolean(buttonRef.current?.dataset.show)
      ) {
        setShowScroll(value);
      }
    };

    const checkScrollTop = () => {
      const viewportHeight = window.innerHeight;
      const limitHeight = viewportHeight / 2;

      if (window.pageYOffset > limitHeight) {
        setShowScrollCheck(true);
      } else {
        setShowScrollCheck(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      className={`${styles.container} ${className}`}
      data-show={showScroll}
      onClick={scrollTop}
      ref={buttonRef}
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
