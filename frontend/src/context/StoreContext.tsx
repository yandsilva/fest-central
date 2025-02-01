import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { event_list } from "../assets/assets";

interface adress {
  cep: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
}

interface Event {
  _id: string;
  name: string;
  image: string;
  price: number;
  local: string;
  adress: adress;
  time: string;
  rating: number;
  category: string;
}

interface StoreContextType {
  event_list: Event[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const StoreContext = createContext<StoreContextType>({
  event_list,
  search: "",
  setSearch: () => {},
});

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  const [search, setSearch] = useState<string>("");

  const contextValue: StoreContextType = {
    event_list,
    search,
    setSearch,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
