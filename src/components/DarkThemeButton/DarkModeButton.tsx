import moonLine from '@iconify/icons-clarity/moon-line';
import sunLine from '@iconify/icons-clarity/sun-line';
import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import styles from './DarkModeButton.module.scss';

const DarkModeButton = (): JSX.Element => {
  const [theme, setTheme] = useState('light');
  const [isAnimationActive, setAnimationActive] = useState(false);

  useEffect(() => {
    const preferColor = window.matchMedia('(prefers-color-scheme: dark)');

    preferColor.addEventListener('change', function (evt) {
      setTheme(evt.matches ? 'dark' : 'light');
    });
    const prefersDark = preferColor.matches;
    const actualTheme = prefersDark ? 'dark' : 'light';
    setTheme(actualTheme);
    document.body.dataset.theme = actualTheme;
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  const changeTheme = () => {
    setAnimationActive(true);
    setTheme(theme === 'light' ? 'dark' : 'light');

    setTimeout(() => {
      setAnimationActive(false);
    }, 600);
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.containerInner} ${
          isAnimationActive ? styles.animation : ''
        }`}
      >
        <div className={styles.iconWrapper} onClick={() => changeTheme()}>
          <Icon icon={moonLine} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper} onClick={() => changeTheme()}>
          <Icon icon={sunLine} className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export { DarkModeButton };
