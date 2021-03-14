import barChart from "@iconify/icons-bi/bar-chart";
import bxCloudUpload from "@iconify/icons-bx/bx-cloud-upload";
import bxData from "@iconify/icons-bx/bx-data";
import bxsMicrochip from "@iconify/icons-bx/bxs-microchip";
import lockLine from "@iconify/icons-clarity/lock-line";
import mobilePhoneSolid from "@iconify/icons-clarity/mobile-phone-solid";
import baselinePrecisionManufacturing from "@iconify/icons-ic/baseline-precision-manufacturing";
import outlineScience from "@iconify/icons-ic/outline-science";
import augmentedReality from "@iconify/icons-openmoji/augmented-reality";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import ReactTooltip, { Effect, Type } from "react-tooltip";
import Logo from "../../assets/images/ifmaker/logo.svg";
import styles from "./Hero.module.scss";

interface TooltipConfig {
  type: Type;
  effect: Effect;
  delayHide: number;
  delayShow: number;
  className: { styles: any; "": any };
  classNameMsgLeft: string;
  classNameMsgRight: string;
  buttonMsg: string;
  colorBG: string;
}

const Hero = () => {
  const [width, setWidth] = useState<number>(0);

  const tooltipConfig: TooltipConfig = {
    type: "dark",
    effect: "solid",
    delayHide: 200,
    delayShow: 100,
    className: styles.tooltip,
    classNameMsgLeft: `${styles.tooltipMsg} ${styles.tooltipMsgLeft}`,
    classNameMsgRight: `${styles.tooltipMsg} ${styles.tooltipMsgRight}`,
    buttonMsg:
      width >= 768
        ? "Clique no ícone para aprender mais"
        : "Clique aqui para aprender mais",
    colorBG: "#283036",
  };

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.heroLogoContainer}>
        <div
          className={styles.heroIconWrapper}
          data-tip="Realidade Aumentada"
          data-for="augmentedReality"
        >
          <Icon icon={augmentedReality} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Realidade Aumentada</span>
          <ReactTooltip
            id="augmentedReality"
            place="right"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgRight}>
              A realidade aumentada consiste em incluir elementos digitais em
              nossa realidade por meio de equipamentos eletrônicos.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Big Data"
          data-for="bigData"
        >
          <Icon icon={bxData} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Big Data</span>
          <ReactTooltip
            id="bigData"
            place="right"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgRight}>
              A Big Data consiste no armazenamento, gerenciamento e análise de
              uma grande massa de dados, uma realidade hoje.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Robótica"
          data-for="robotics"
        >
          <Icon
            icon={baselinePrecisionManufacturing}
            className={styles.heroIcon}
          />
          <span className={styles.heroIconText}>Robótica</span>
          <ReactTooltip
            id="robotics"
            place="right"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgRight}>
              A robótica consiste na automação de processos por meio de rôbos
              autônomos ou semi-autônomos.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Simulação"
          data-for="simulation"
        >
          <Icon icon={outlineScience} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Simulação</span>
          <ReactTooltip
            id="simulation"
            place="right"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgRight}>
              A simulação consiste em ambientes simulados para análise de novos
              processos.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Manufatura Aditiva"
          data-for="additiveManufacturing"
        >
          <Icon icon={barChart} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Manufatura Aditiva</span>
          <ReactTooltip
            id="additiveManufacturing"
            place="left"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgLeft}>
              A Manufatura Aditiva consiste na criação de objetos camada a
              camada diferente da manufatura tradicional.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Sistemas Integrados"
          data-for="integratedSystems"
        >
          <Icon icon={bxsMicrochip} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Sistemas Integrados</span>
          <ReactTooltip
            id="integratedSystems"
            place="left"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgLeft}>
              Sistemas Integrados consistem em sistemas que "conversam" entre
              si, podendo até estar em computação nas nuvens.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Computação em Nuvem"
          data-for="cloudComputing"
        >
          <Icon icon={bxCloudUpload} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Computação em Nuvem</span>
          <ReactTooltip
            id="cloudComputing"
            place="left"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgLeft}>
              A Computação nas Nuvens é o uso, hospedagem e gerênciamento de
              serviços e recursos na internet, em servidores fora da empresa.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Internet das Coisas"
          data-for="iot"
        >
          <Icon icon={mobilePhoneSolid} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Internet das Coisas</span>
          <ReactTooltip
            id="iot"
            place="left"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgLeft}>
              A Internet das Coisas leva conectividade para todos dispositivos,
              incluindo <em>wearables</em> e sensores em equipamentos.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>
        <div
          className={styles.heroIconWrapper}
          data-tip="Segurança da Informação"
          data-for="security"
        >
          <Icon icon={lockLine} className={styles.heroIcon} />
          <span className={styles.heroIconText}>Segurança da Informação</span>
          <ReactTooltip
            id="security"
            place="top"
            type={tooltipConfig.type}
            effect={tooltipConfig.effect}
            delayHide={tooltipConfig.delayHide}
            delayShow={tooltipConfig.delayShow}
            className={styles.tooltip}
            backgroundColor={tooltipConfig.colorBG}
            arrowColor={tooltipConfig.colorBG}
          >
            <span className={tooltipConfig.classNameMsgLeft}>
              A Segurança da Informação consiste em manter a segurança de todos
              os dados que trafegam na internet.
              <span className={styles.tooltipButton}>
                {tooltipConfig.buttonMsg}
              </span>
            </span>
          </ReactTooltip>
        </div>

        <h1 className={styles.heroLogoWrapper}>
          <Logo
            className={styles.heroLogoIcon}
            aria-label="Logo do Laboratório IFMaker"
          />
        </h1>
      </div>
    </section>
  );
};

export { Hero };
