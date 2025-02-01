import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import EventsItem from "./EventsItem";
import { Button } from "./ui/button";
import Title from "./Title";

interface Event {
  _id: string;
  name: string;
  image: string;
  price: number;
  local: string;
  time: string;
  rating: number;
  category: string;
}

export default function EventsDisplay({ category }) {
  const { event_list } = useContext(StoreContext);
  const [latestProducts, setLatestProducts] = useState<Event[]>([]);

  useEffect(() => {
    setLatestProducts(event_list.slice(0, 6));
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Title title={"Eventos Populares em Bauru"} />
      <div className="flex flex-wrap items-center justify-center gap-10">
        {latestProducts.map((item, index) => {
          if (category === "All" || category === item.category)
            return (
              <EventsItem
                key={index}
                id={item._id}
                name={item.name}
                image={item.image}
                price={item.price}
                local={item.local}
                time={item.time}
                rating={item.rating}
              />
            );
        })}
      </div>
      <Button className="m-auto w-1/2" size={"lg"} variant={"outline"}>
        Veja Mais
      </Button>
    </div>
  );
}
