import homeOutlined from "@iconify/icons-ant-design/home-outlined";
import bxMenu from "@iconify/icons-bx/bx-menu";
import bxMessageAltDetail from "@iconify/icons-bx/bx-message-alt-detail";
import bxSearch from "@iconify/icons-bx/bx-search";
import chartLine from "@iconify/icons-cil/chart-line";
import groupSolid from "@iconify/icons-clarity/group-solid";
import windowCloseLine from "@iconify/icons-clarity/window-close-line";
import news20Regular from "@iconify/icons-fluent/news-20-regular";
import targetEdit16Regular from "@iconify/icons-fluent/target-edit-16-regular";
import toolsIcon from "@iconify/icons-la/tools";
import { Icon } from "@iconify/react";
import { useState } from "react";
import Logo from "../../assets/images/ifmaker/logo.svg";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isMobileSideMenuActive, setIsMobileSideMenuActive] = useState(false);

  const openMobileSideMenu = () => {
    setIsMobileSideMenuActive(true);
  };

  const closeMobileSideMenu = () => {
    setIsMobileSideMenuActive(false);
  };

  return (
    <nav className={styles.container}>
      <div
        className={`${styles.menuMainOverlay} ${
          isMobileSideMenuActive ? styles.opened : ""
        }`}
        onClick={() => {
          closeMobileSideMenu();
        }}
      >
        <div
          className={`${styles.menuMain} ${
            isMobileSideMenuActive ? styles.active : ""
          }`}
        >
          <h3 className={styles.menuMainTitleWrapper}>
            <Logo className={styles.menuMainTitleIcon} />
            <span
              onClick={() => closeMobileSideMenu()}
              className={styles.menuMainTitleCloseWrapper}
            >
              <Icon
                icon={windowCloseLine}
                className={styles.menuMainTitleCloseIcon}
              />
            </span>
          </h3>
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
      </div>

      <div className={styles.menuBottom}>
        <div className={`${styles.menuBottomIconWrapper} ${styles.active}`}>
          <Icon icon={homeOutlined} className={styles.menuBottomIcon} />
        </div>
        <div className={styles.menuBottomIconWrapper}>
          <Icon icon={bxSearch} className={styles.menuBottomIcon} />
        </div>
        <div
          className={styles.menuBottomIconWrapper}
          onClick={() => openMobileSideMenu()}
        >
          <Icon icon={bxMenu} className={styles.menuBottomIcon} />
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
