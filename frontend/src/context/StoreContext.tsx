import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import axios from "axios";

interface EventsItemProps {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  image: string[];
  ticketName: string;
  ticketPrice: string;
  complement: string;
  categoriesId: string;
}

interface StoreContextType {
  event_list: EventsItemProps[];
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export const StoreContext = createContext<StoreContextType>({
  eventList,
  search: "",
  setSearch: () => {},
});

interface StoreContextProviderProps {
  children: ReactNode;
}

const StoreContextProvider = ({ children }: StoreContextProviderProps) => {
  const [eventList, setEventList] = useState<EventsItemProps[]>([]);
  const [search, setSearch] = useState<string>("");

  async function getEvents() {
    const response = await axios.get(
      "http://localhost:3333/api/v1/events/get-events",
    );
    setEventList(response.data.events);
    console.log(response.data.events);
    getEvents();
  }

  const contextValue: StoreContextType = {
    eventList,
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
