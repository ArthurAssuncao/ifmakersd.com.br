import welcomeLearnMore from '@iconify/icons-dashicons/welcome-learn-more';
import peopleCarry from '@iconify/icons-la/people-carry';
import lightbulbOnOutline from '@iconify/icons-mdi/lightbulb-on-outline';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import objective01 from '../../assets/images/objectives/objetivo-01.webp';
import objective02 from '../../assets/images/objectives/objetivo-02.webp';
import objective03 from '../../assets/images/objectives/objetivo-03.webp';
import { Objective } from '../../components/Objective';
import { Wave } from '../../components/Wave';
import Loader from '../../services/Loader';
import styles from './Objectives.module.scss';

const Objectives = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <Wave className={styles.wave} />
      <div className={styles.containerInner}>
        <h3 className={styles.title}>
          Nossos objetivos fazem toda a diferença
        </h3>
        <div className={styles.objectives}>
          <Fade duration={1500} cascade>
            <Objective
              icon={<Icon icon={welcomeLearnMore} />}
              image={
                <Image
                  src={objective01}
                  alt="Aprendizado com base em projetos reais"
                  width={300}
                  height={180}
                  loader={Loader.imageLoader}
                />
              }
              title="Aprender fazendo"
              description="Aprendizado com base em projetos reais"
            />
            <Objective
              icon={<Icon icon={peopleCarry} />}
              image={
                <Image
                  src={objective02}
                  alt="Aprendizado com base em projetos reais"
                  width={300}
                  height={180}
                  loader={Loader.imageLoader}
                />
              }
              title="Transformação da sociedade"
              description="Projetos realizados para uma sociedade 4.0"
            />
            <Objective
              icon={<Icon icon={lightbulbOnOutline} />}
              image={
                <Image
                  src={objective03}
                  alt="Aprendizado com base em projetos reais"
                  width={300}
                  height={180}
                  loader={Loader.imageLoader}
                />
              }
              title="Inovação"
              description="Geração de valor com ideias inovadoras"
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { Objectives };
