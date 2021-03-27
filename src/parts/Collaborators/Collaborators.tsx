import { useContext } from "react";
import { Button } from "../../components/Button";
import { CarouselCollaborators } from "../../components/CarouselCollaborators";
import { Loading } from "../../components/Loading";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { CollaboratorContext } from "../../services/CollaboratorContext";
import { Section } from "../Section";
import styles from "./Collaborators.module.scss";

interface CollaboratorProps {
  collaborators?: Array<CollaboratorCMS>;
  hasMoreButton: boolean;
}

const Collaborators = (props: CollaboratorProps) => {
  const { collaborators } = props.collaborators
    ? props
    : useContext(CollaboratorContext);
  const { hasMoreButton } = props;

  const button = (
    <Button
      backgroundColor="neutral"
      href="/collaborator"
      text="Conheça toda nossa equipe"
    ></Button>
  );
  return (
    <Section
      title="Equipe qualificada"
      moreButton={hasMoreButton && button}
      backgroundColor="neutral"
      className={styles.container}
    >
      {collaborators ? (
        <CarouselCollaborators collaborators={collaborators} />
      ) : (
        <Loading />
      )}
    </Section>
  );
};

export { Collaborators };
