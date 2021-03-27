import "isomorphic-fetch";
import { createContext, ReactNode, useEffect } from "react";
import useSWR from "swr";
import { EquipmentCMS } from "../../pages/api/schema/equipment";

interface EquipmentContextData {
  equipments: Array<EquipmentCMS> | undefined;
}

interface EquipmentProviderProps {
  children: ReactNode;
}

const EquipmentContext = createContext({} as EquipmentContextData);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const EquipmentProvider = ({ children }: EquipmentProviderProps) => {
  const { data, error } = useSWR<Array<EquipmentCMS>>(
    "/api/equipment?limit=3",
    fetcher
  );

  useEffect(() => {}, []);

  return (
    <EquipmentContext.Provider value={{ equipments: data }}>
      {children}
    </EquipmentContext.Provider>
  );
};

export { EquipmentContext, EquipmentProvider };
export type { EquipmentContextData };
