import { CSSProperties } from "react";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { ImageUrl } from "../../util/ImageUrl";
import styles from "./Collaborator.module.scss";

interface CollaboratorProps {
  collaborator: CollaboratorCMS;
}

const Collaborator = (props: CollaboratorProps) => {
  const { collaborator } = props;
  const urlResized = ImageUrl.generateUrl(collaborator.photo.url, 180);
  const urlResizedCSSVar = {
    "--collaborator-photo-url": `url(${urlResized})`,
  } as CSSProperties;

  return (
    <div className={styles.container}>
      <div className={styles.photo} style={urlResizedCSSVar}></div>
      <div className={styles.name}>{collaborator.name}</div>
      <div className={styles.biography}>{collaborator.description}</div>
    </div>
  );
};

export { Collaborator };
