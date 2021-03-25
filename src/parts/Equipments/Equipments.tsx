import { useContext } from "react";
import { Button } from "../../components/Button";
import { Equipment } from "../../components/Equipment";
import { Loading } from "../../components/Loading";
import { EquipmentCMS } from "../../pages/api/schema/equipment";
import { EquipmentContext } from "../../services/EquipmentContext";
import { Section } from "../Section";

interface EquipmentProps {
  equipments?: Array<EquipmentCMS>;
  hasMoreButton: boolean;
}

const Equipments = (props: EquipmentProps) => {
  const { equipments } = props.equipments
    ? props
    : useContext(EquipmentContext);
  const { hasMoreButton } = props;

  const button = (
    <Button
      backgroundColor="purple"
      href="/equipment"
      text="Veja todos equipamentos"
    ></Button>
  );
  return (
    <Section
      title="Aprenda sobre nossos equipamentos"
      moreButton={hasMoreButton && button}
      backgroundColor="purple"
    >
      {equipments ? (
        equipments.map((equipment: EquipmentCMS) => {
          return <Equipment equipment={equipment} key={equipment.slug} />;
        })
      ) : (
        <Loading />
      )}
    </Section>
  );
};

export { Equipments };
