import welcomeLearnMore from "@iconify/icons-dashicons/welcome-learn-more";
import peopleCarry from "@iconify/icons-la/people-carry";
import lightbulbOnOutline from "@iconify/icons-mdi/lightbulb-on-outline";
import { Icon } from "@iconify/react";
import objective01 from "../../assets/images/objectives/objetivo-01.webp";
import objective02 from "../../assets/images/objectives/objetivo-02.webp";
import objective03 from "../../assets/images/objectives/objetivo-03.webp";
import { Objective } from "../../components/Objective";
import { Wave } from "../../components/Wave";
import styles from "./Objectives.module.scss";

const Objectives = () => {
  return (
    <section className={styles.container}>
      <Wave className={styles.wave} />
      <div className={styles.containerInner}>
        <h3 className={styles.title}>
          Nossos objetivos fazem toda a diferença
        </h3>
        <div className={styles.objectives}>
          <Objective
            icon={<Icon icon={welcomeLearnMore} />}
            image={<img src={objective01} />}
            title="Aprender fazendo"
            description="Aprendizado com base em projetos reais"
          />
          <Objective
            icon={<Icon icon={peopleCarry} />}
            image={<img src={objective02} />}
            title="Transformação da sociedade"
            description="Projetos realizados para uma sociedade 4.0"
          />
          <Objective
            icon={<Icon icon={lightbulbOnOutline} />}
            image={<img src={objective03} />}
            title="Inovação"
            description="Geração de valor com ideias inovadoras"
          />
        </div>
      </div>
    </section>
  );
};

export { Objectives };
