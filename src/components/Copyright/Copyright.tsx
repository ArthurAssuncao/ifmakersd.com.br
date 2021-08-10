import ReactTooltip, { Effect, Type } from 'react-tooltip';
import styles from './Copyright.module.scss';

interface TooltipConfig {
  type: Type;
  effect: Effect;
  delayHide: number;
  delayShow: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className: { styles: any; '': any };
  colorBG: string;
}

const Copyright = (): JSX.Element => {
  const year = new Date().getFullYear();

  const tooltipConfig: TooltipConfig = {
    type: 'dark',
    effect: 'solid',
    delayHide: 200,
    delayShow: 100,
    className: styles.tooltip,
    colorBG: '#283036',
  };

  return (
    <div className={styles.container}>
      <span className={styles.copyrightIF}>
        Laboratório IF Maker do IF Sudeste MG Santos Dumont @ {year}
      </span>
      <span
        className={styles.copyrightThirdParty}
        data-tip="Créditos das figuras"
        data-for="copyrightFiguresThirdParty"
      >
        Créditos figuras do freepik
        <ReactTooltip
          id="copyrightFiguresThirdParty"
          place="top"
          type={tooltipConfig.type}
          effect={tooltipConfig.effect}
          delayHide={tooltipConfig.delayHide}
          delayShow={tooltipConfig.delayShow}
          className={styles.tooltip}
          backgroundColor={tooltipConfig.colorBG}
          arrowColor={tooltipConfig.colorBG}
        >
          <div className={styles.tooltipMsg}>
            <h6 className={styles.tooltipTitle}>
              Créditos das figuras da seção Objetivos
            </h6>
            <ul className={styles.tooltipList}>
              <li className={styles.tooltipListItem}>
                <span>Figura 1</span>
                <a href="https://www.freepik.com/vectors/school">
                  School vector created by pch.vector - www.freepik.com
                </a>
              </li>

              <li className={styles.tooltipListItem}>
                <span>Figura 2</span>
                <a href="http://www.freepik.com">
                  Designed by vectorjuice / Freepik
                </a>
              </li>

              <li className={styles.tooltipListItem}>
                <span>Figura 3</span>
                <a href="http://www.freepik.com">
                  Designed by vectorjuice / Freepik
                </a>
              </li>
            </ul>
          </div>
        </ReactTooltip>
      </span>
    </div>
  );
};

export { Copyright };
