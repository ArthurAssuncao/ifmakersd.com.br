import bxMessageAltDetail from "@iconify/icons-bx/bx-message-alt-detail";
import chartLine from "@iconify/icons-cil/chart-line";
import groupSolid from "@iconify/icons-clarity/group-solid";
import news20Regular from "@iconify/icons-fluent/news-20-regular";
import targetEdit16Regular from "@iconify/icons-fluent/target-edit-16-regular";
import toolsIcon from "@iconify/icons-la/tools";
import { Icon } from "@iconify/react";
import { useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/ifmaker/logo.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isMobileSideMenuActive, setIsMobileSideMenuActive] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  let navRef = useRef<HTMLElement | null>(null);

  const setShowFloatingCheck = (value: boolean) => {
    if (
      value !== showFloating ||
      value !== Boolean(navRef.current?.dataset.floating)
    ) {
      setShowFloating(value);
    }
  };

  const checkScroll = () => {
    const limitHeight = window.innerHeight; // window.innerHeight

    if (window.pageYOffset > limitHeight) {
      setShowFloatingCheck(true);
    } else {
      setShowFloatingCheck(false);
    }
  };

  const openMobileSideMenu = () => {
    setIsMobileSideMenuActive(true);
  };

  const closeMobileSideMenu = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;
    setIsMobileSideMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  return (
    <>
      <nav className={styles.containerMenuTop}>
        <div className={styles.menuIconTopWrapper}>
          <Logo className={styles.menuIconTop} />
        </div>
      </nav>
      <nav className={styles.containerMenuMain}>
        <div className={styles.containerInnerMenuMain}>
          <ul className={styles.menuMainList}>
            <li className={styles.menuMainItem}>
              <Icon
                icon={targetEdit16Regular}
                className={styles.menuMainItemIcon}
              />
              <span className={styles.menuMainItemText}>Objetivos</span>
            </li>
            <li className={styles.menuMainItem}>
              <Icon icon={chartLine} className={styles.menuMainItemIcon} />
              <span className={styles.menuMainItemText}>Projetos</span>
            </li>
            <li className={styles.menuMainItem}>
              <Icon icon={news20Regular} className={styles.menuMainItemIcon} />
              <span className={styles.menuMainItemText}>Blog</span>
            </li>
            <li className={styles.menuMainItem}>
              <Icon icon={toolsIcon} className={styles.menuMainItemIcon} />
              <span className={styles.menuMainItemText}>Equipamentos</span>
            </li>
            <li className={styles.menuMainItem}>
              <Icon icon={groupSolid} className={styles.menuMainItemIcon} />
              <span className={styles.menuMainItemText}>Equipe</span>
            </li>
            <li className={styles.menuMainItem}>
              <Icon
                icon={bxMessageAltDetail}
                className={styles.menuMainItemIcon}
              />
              <span className={styles.menuMainItemText}>Contato</span>
            </li>
          </ul>
        </div>
      </nav>
      <nav className={styles.containerMenuBottom}></nav>
    </>
  );
};

export { NavBar };
