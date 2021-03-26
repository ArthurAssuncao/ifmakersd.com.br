import { useContext } from "react";
import { Button } from "../../components/Button";
import { Collaborator } from "../../components/Collaborator";
import { Loading } from "../../components/Loading";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { CollaboratorContext } from "../../services/CollaboratorContext";
import { Section } from "../Section";

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
    >
      {collaborators ? (
        collaborators.map((collaborator: CollaboratorCMS) => {
          return (
            <Collaborator collaborator={collaborator} key={collaborator.slug} />
          );
        })
      ) : (
        <Loading />
      )}
    </Section>
  );
};

export { Collaborators };
