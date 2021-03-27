import { CSSProperties, useEffect, useRef, useState } from "react";
import { CollaboratorCMS } from "../../pages/api/schema/collaborator";
import { Collaborator } from "../Collaborator";
import styles from "./CarouselCollaborators.module.scss";

interface CarouselCollaboratorsProps {
  collaborators: Array<CollaboratorCMS>;
}

const CarouselCollaborators = (props: CarouselCollaboratorsProps) => {
  const { collaborators } = props;
  const collaboratorsLengthCSSVar = {
    "--number-itens": collaborators.length,
  } as CSSProperties;
  const middleIndex = Math.floor(collaborators.length / 2);
  const [currentIndex, setCurrentIndex] = useState(middleIndex);
  const [direction, setDirection] = useState<"left" | "right" | "">("");
  const itemListRef = useRef<HTMLUListElement | null>(null);

  const changeCurrentIndex = (index: number) => {
    setCurrentIndex(index);
  };

  const changeDirection = (newIndex: number, oldIndex: number) => {
    if (newIndex === oldIndex) {
      return;
    }
    setDirection(newIndex > oldIndex ? "right" : "left");
  };

  const dispatchAnimation = () => {
    const itemList = itemListRef && (itemListRef.current as HTMLUListElement);
    itemList.dataset.animation = direction;
    setTimeout(() => {
      itemList.dataset.animation = "";
    }, 1000);
  };

  useEffect(() => {
    if (itemListRef) {
      const itemList = itemListRef && (itemListRef.current as HTMLUListElement);
      const listSize = collaborators.length;

      for (let i = 0; i < listSize; i++) {
        let position = i + currentIndex;
        const orderPosition = i + 1;

        if (position >= listSize) {
          position = position - listSize;
        }

        const item = itemList.children[position] as HTMLLIElement;
        item.style.order = String(orderPosition);
      }
      dispatchAnimation();
    }
  }, [currentIndex]);

  return (
    <div className={styles.container} style={collaboratorsLengthCSSVar}>
      <ul className={styles.itemList} ref={itemListRef}>
        {collaborators.map((collaborator: CollaboratorCMS, index: number) => {
          return (
            <li className={styles.item} key={index}>
              <Collaborator
                collaborator={collaborator}
                key={collaborator.slug}
              />
            </li>
          );
        })}
      </ul>
      <ul className={styles.dotList}>
        {collaborators.map((_collaborator: CollaboratorCMS, index: number) => {
          return (
            <li
              className={styles.dotItem}
              key={index}
              onClick={() => {
                changeCurrentIndex(index);
                changeDirection(currentIndex, index);
              }}
              data-active={currentIndex == index ? "true" : "false"}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export { CarouselCollaborators };
