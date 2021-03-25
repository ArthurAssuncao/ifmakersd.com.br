import type { NextApiRequest, NextApiResponse } from "next";
import { CmsClient } from "../../services/ContentfulClient";
import { EquipmentCMS } from "./schema/equipment";

const CONTENT_TYPE = "equipment";

const createEquipment = (item: any) => {
  if (!item || !item.fields) {
    return null;
  }

  const equipment: EquipmentCMS = {
    title: item.fields.title,
    slug: item.fields.slug,
    image: {
      url: item.fields.image.fields.file.url,
      type: item.fields.image.fields.file.contentType,
    },
    description: item.fields.description,
  };
  return equipment;
};

const createEquipmentsAndParse = (items: any) => {
  const equipments = [];
  for (let item of items) {
    const formatedEquipment = createEquipment(item);
    if (formatedEquipment) {
      equipments.push(formatedEquipment);
    }
  }
  return equipments;
};

const handleRequest = async (req: NextApiRequest, res: NextApiResponse) => {
  const { limit = 10 } = req.query;
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: "-sys.createdAt",
    limit,
  });

  const newData = createEquipmentsAndParse(data.items);

  res.status(200).json(newData);
};

const fetchEquipments = async (limitReq?: number) => {
  const limit = limitReq && 10;
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    order: "-sys.createdAt",
    limit,
  });

  const newData = createEquipmentsAndParse(data.items);

  return newData;
};

const fetchEquipment = async (slug: string) => {
  const data = await CmsClient.getEntries({
    content_type: CONTENT_TYPE,
    limit: 1,
    "fields.slug": slug,
  });

  const newData = data ? createEquipment(data.items[0]) : null;

  return newData;
};

const generateEquipmentUrl = (slug: string) => {
  return `/equipments/${slug}`;
};

export default handleRequest;
export { fetchEquipments, fetchEquipment, generateEquipmentUrl };
