import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Title from "./Title";
import axios from "axios";
import EventsItem from "./EventsItem";

interface ImageProps {
  id: string;
  path: string;
  createdAt: string;
  updatedAt: string;
  eventId: string;
}

interface Event {
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
  image: ImageProps[];
  ticketName: string;
  ticketPrice: string;
  complement: string;
  categoriesId: string;
}

export default function EventsDisplay({ categoriesId }) {
  const [eventsDisplay, setEventsDisplay] = useState<Event[]>([]);

  useEffect(() => {
    async function getEventsDisplay() {
      const response = await axios.get(
        "http://localhost:3333/api/v1/events/get-events",
      );
      setEventsDisplay(response.data.events);
    }
    getEventsDisplay();
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <Title title={"Eventos Populares em Bauru"} />
      <div className="flex flex-wrap items-center justify-center gap-10">
        {eventsDisplay.map((item) => {
          return (
            <EventsItem
              key={item.id}
              id={item.id}
              name={item.name}
              date={item.date}
              time={item.time}
              description={item.description}
              zipCode={item.zipCode}
              street={item.street}
              number={item.number}
              neighborhood={item.neighborhood}
              city={item.city}
              state={item.state}
              complement={item.complement}
              ticketName={item.ticketName}
              ticketPrice={item.ticketPrice}
              image={item.image.map((img: ImageProps) => img.path)}
              categoriesId={item.categoriesId}
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

// if (categoriesId === "All" || categoriesId === item.categoriesId)
