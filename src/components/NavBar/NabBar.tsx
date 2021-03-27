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
import { ReactNode, useEffect, useRef, useState } from "react";
import Logo from "../../assets/images/ifmaker/logo.svg";
import styles from "./NavBar.module.scss";

interface NavBarProps {
  children?: ReactNode;
}

const NavBar = (props: NavBarProps) => {
  const { children } = props;
  const [isMobileSideMenuActive, setIsMobileSideMenuActive] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const [floatingWillDisappear, setFloatingWillDisappear] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchNeverOpened, setSearchNeverOpened] = useState(true);

  let navRef = useRef<HTMLElement | null>(null);
  let inputSearchRef = useRef<HTMLInputElement | null>(null);

  const setShowFloatingCheck = (value: boolean) => {
    if (
      value !== showFloating ||
      value !== Boolean(navRef.current?.dataset.floating)
    ) {
      setShowFloating(value);
      if (!value) {
        setTimeout(() => {
          setFloatingWillDisappear(false);
        }, 600);
      } else {
        setFloatingWillDisappear(true);
      }
    }
  };

  const setIsSearchActiveCheck = (value: boolean) => {
    setTimeout(() => {
      if (
        value !== isSearchActive ||
        value !== Boolean(inputSearchRef.current?.dataset.active)
      ) {
        setIsSearchActive(value);
        if (value) {
          inputSearchRef.current?.focus();
          if (searchNeverOpened) {
            setSearchNeverOpened(false);
          }
        } else {
          inputSearchRef.current?.blur();
        }
      }
    }, 100);
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
      <div
        className={styles.containerMenuMainSpaceFix}
        data-floating={showFloating}
        data-floating-will-disappear={floatingWillDisappear}
      ></div>
      <nav
        className={styles.containerMenuMain}
        data-menuopen={isMobileSideMenuActive}
        data-floating={showFloating}
        data-floating-will-disappear={floatingWillDisappear}
        onClick={(e: React.MouseEvent) => closeMobileSideMenu(e)}
        ref={navRef}
      >
        <div className={styles.containerInnerMenuMain}>
          <div className={styles.menuMainIconWrapper}>
            <Logo className={styles.menuMainIcon} />
          </div>
          <span
            onClick={(e: React.MouseEvent) => closeMobileSideMenu(e)}
            className={styles.menuMainCloseWrapper}
          >
            <Icon icon={windowCloseLine} className={styles.menuMainCloseIcon} />
          </span>
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
            {children && <li className={styles.menuMainItem}>{children}</li>}
          </ul>
        </div>
      </nav>
      <nav className={styles.containerMenuBottom}>
        <div className={`${styles.menuBottomIconWrapper}`} data-active={true}>
          <Icon icon={homeOutlined} className={styles.menuBottomIcon} />
        </div>
        <div className={styles.menuBottomIconWrapper}>
          <div onClick={() => !isSearchActive && setIsSearchActiveCheck(true)}>
            <Icon icon={bxSearch} className={styles.menuBottomIcon} />
          </div>
          <input
            type="search"
            className={styles.menuBottomSearchField}
            aria-label="Buscar"
            placeholder="Pesquise no site"
            data-active={isSearchActive}
            data-neveropened={searchNeverOpened}
            ref={inputSearchRef}
            onBlur={() => {
              setIsSearchActiveCheck(false);
            }}
          />
        </div>
        <div
          className={styles.menuBottomIconWrapper}
          onClick={() => openMobileSideMenu()}
        >
          <Icon icon={bxMenu} className={styles.menuBottomIcon} />
        </div>
      </nav>
    </>
  );
};

export { NavBar };
