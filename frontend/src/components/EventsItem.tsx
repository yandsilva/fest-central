import { useState } from "react";
import { IoTicket, IoStar, IoStarOutline } from "react-icons/io5";

interface EventsItemProps {
  id: string;
  name: string;
  price: number;
  image: string;
  local: string;
  time: string;
  rating: number;
}

export default function EventsItem({
  id,
  name,
  price,
  image,
  local,
  time,
  rating,
}: EventsItemProps) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="w-[300px] rounded-md bg-white shadow-sm">
      <div className="flex flex-col">
        <div className="relative" onClick={() => setFavorite(!favorite)}>
          {favorite ? (
            <IoStar
              size={35}
              className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2"
            />
          ) : (
            <IoStarOutline
              size={35}
              className="absolute right-2 top-2 cursor-pointer rounded-full bg-white p-2"
            />
          )}
        </div>
        <img className="h-[170px] w-full rounded-t-md" src={image} alt="" />
        <a href={`/cart/${id}`} className="flex gap-2 p-2">
          <div className="flex flex-col items-center">
            <p className="font-montserrat font-semibold text-purple">NOV</p>
            <p className="font-montserrat font-bold text-darker">20</p>
          </div>
          <div className="flex flex-col gap-2 truncate">
            <p
              title={name}
              className="line-clamp-1 font-opensans font-semibold text-darker"
            >
              {name}
            </p>
            <p
              title="Adventure Geek - Explore the Unexplored, Mumbai"
              className="font-opensans text-sm font-medium text-darker"
            >
              {local}
            </p>
            <p className="font-opensans text-sm font-light text-darker">
              {time}
            </p>
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <IoTicket />
                <p className="font-opensans text-sm font-semibold text-grayish">
                  {price}
                </p>
              </div>
              <div className="flex items-center gap-1">
                <IoStar className="text-purple" />
                {rating}
                <p className="font-opensans text-sm font-semibold text-grayish">
                  Interesse
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
