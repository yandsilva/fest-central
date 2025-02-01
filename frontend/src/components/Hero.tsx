import { MapPin, Search } from "lucide-react";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <div className="font-montserrat relative hidden items-center justify-center font-bold sm:flex">
      <img src={assets.hero} alt="" />
      <div className="absolute flex flex-col gap-3 text-lg text-white md:text-2xl">
        <div>
          <p>Não perca!</p>
          <p>
            Explore os <span className="text-yellow">eventos vibrantes</span>{" "}
            que acontecem local e globalmente.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex">
            <div className="bg-whiter text-darker flex w-96 items-center gap-2 rounded-l-md bg-white p-3">
              <Search color="#5A5A5A" />
              <input
                className="font-montserrat w-full border-none text-sm font-light outline-none"
                placeholder="Pesquisar eventos, categorias, localização,..."
              />
            </div>
            <div className="h-full w-[1px]"></div>
            <div className="flex items-center justify-between rounded-r-md bg-white">
              <div className="text-darker flex items-center gap-2 p-3">
                <MapPin color="#5A5A5A" />
                <input
                  className="font-montserrat border-none text-sm font-light outline-none"
                  placeholder="Bauru"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
