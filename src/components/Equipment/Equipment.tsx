import { EquipmentCMS } from '../../pages/api/schema/equipment';
import { Card, ItemCard } from '../Card';

interface EquipmentProps {
  equipment: EquipmentCMS;
}

const Equipment = (props: EquipmentProps): JSX.Element => {
  const { equipment } = props;

  const equipmentItem: ItemCard = {
    slug: equipment.slug,
    imageUrl: equipment.image.url,
    title: equipment.name,
    description: equipment.description,
    href: '/#',
  };

  return <Card item={equipmentItem} />;
};

export { Equipment };
