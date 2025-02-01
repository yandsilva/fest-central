import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { StoreContext } from "../context/StoreContext";
import EventsItem from "../components/EventsItem";

export default function InterestedEvents() {
  const { event_list } = useContext(StoreContext);

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="min-h-[50vh]">
        <div>
          {event_list.map((event) => (
            <EventsItem
              key={event._id}
              image={event.image}
              id={event._id}
              name={event.name}
              price={event.price}
              local={event.local}
              time={event.time}
              rating={event.rating}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
