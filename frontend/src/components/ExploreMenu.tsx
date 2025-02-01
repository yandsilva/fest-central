import { menu_list } from "../assets/assets";
import Title from "./Title";

interface ExploreMenuProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExploreMenu({
  category,
  setCategory,
}: ExploreMenuProps) {
  return (
    <div className="hidden flex-col gap-5 md:flex">
      <Title title={"Explore por Categoria"} />
      <div className="flex items-start justify-center gap-10">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name,
                )
              }
              key={index}
              className="flex cursor-pointer flex-col items-center justify-center gap-3"
            >
              <img
                className={`${
                  category === item.menu_name
                    ? "rounded-full border-4 border-tomato"
                    : ""
                }`}
                src={item.menu_image}
                alt=""
              />
              <p className="font-opensans font-semibold">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
