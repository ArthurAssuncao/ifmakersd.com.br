import type { NextApiRequest, NextApiResponse } from 'next';
import { CmsClient } from '../../services/ContentfulClient';
import { EquipmentCMS } from './schema/equipment';

const CONTENT_TYPE = 'equipment';
const cmsClient = CmsClient.getInstance();

interface EquipmentContentfull {
  fields: {
    name: string;
    slug: string;
    image: {
      fields: {
        file: {
          url: string;
          contentType: string;
        };
      };
    };
    description: string;
  };
}

const createEquipment = (item: EquipmentContentfull) => {
  if (!item || !item.fields) {
    return null;
  }

  const equipment: EquipmentCMS = {
    name: item.fields.name,
    slug: item.fields.slug,
    image: {
      url: item.fields.image.fields.file.url,
      type: item.fields.image.fields.file.contentType,
    },
    description: item.fields.description,
  };
  return equipment;
};

const createEquipmentsAndParse = (items: EquipmentContentfull[]) => {
  const equipments = [];
  for (let item of items) {
    const formatedEquipment = createEquipment(item);
    if (formatedEquipment) {
      equipments.push(formatedEquipment);
    }
  }
  return equipments;
};

const handleRequest = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { limit = 10 } = req.query;
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: '-sys.createdAt',
    limit,
  });

  const newData = createEquipmentsAndParse(
    data.items as EquipmentContentfull[]
  );

  res.status(200).json(newData);
};

const fetchEquipments = async (limitReq?: number): Promise<EquipmentCMS[]> => {
  const limit = limitReq && 10;
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: '-sys.createdAt',
    limit,
  });

  const newData = createEquipmentsAndParse(
    data.items as EquipmentContentfull[]
  );

  return newData;
};

const fetchEquipment = async (slug: string): Promise<null | EquipmentCMS> => {
  const data = await cmsClient.getEntries({
    content_type: CONTENT_TYPE,
    limit: 1,
    'fields.slug': slug,
  });

  const newData = data
    ? createEquipment(data.items[0] as EquipmentContentfull)
    : null;

  return newData;
};

const generateEquipmentUrl = (slug: string): string => {
  return `/equipments/${slug}`;
};

export default handleRequest;
export { fetchEquipments, fetchEquipment, generateEquipmentUrl };
