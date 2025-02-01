import { ChevronRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/StoreContext";
import EventsItem from "../components/EventsItem";

// Definindo tipos para os eventos e categorias
type Event = {
  _id: string;
  name: string;
  price: number;
  image: string;
  local: string;
  time: string;
  rating: number;
  category: string; // Adicionei a categoria aqui
};

type Category = string;

const Events = () => {
  const { event_list, search, setSearch } = useContext(StoreContext);
  const [filterEvents, setFilterEvents] = useState<Event[]>(event_list);
  const [category, setCategory] = useState<Category[]>([]);
  const [sortType, setSortType] = useState<
    "relevante" | "low-high" | "high-low"
  >("relevante");

  // Função para alternar categorias selecionadas
  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // Função para aplicar filtros
  const applyFilter = () => {
    let eventsCopy = event_list.slice();

    // Filtro por busca
    if (search) {
      eventsCopy = eventsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Filtro por categoria
    if (category.length > 0) {
      eventsCopy = eventsCopy.filter((item) =>
        category.includes(item.category),
      );
    }

    setFilterEvents(eventsCopy);
  };

  // Função para ordenar eventos
  const sortEvent = () => {
    const feCopy = [...filterEvents];

    switch (sortType) {
      case "low-high":
        feCopy.sort((a, b) => a.price - b.price);
        break;
      case "high-low":
        feCopy.sort((a, b) => b.price - a.price);
        break;
      default:
        // Mantém a ordem original
        break;
    }

    setFilterEvents(feCopy);
  };

  // Aplica filtros sempre que `category` ou `search` mudar
  useEffect(() => {
    applyFilter();
  }, [category, search]);

  // Ordena eventos sempre que `sortType` mudar
  useEffect(() => {
    sortEvent();
  }, [sortType]);

  return (
    <div className="flex w-full flex-col gap-10">
      <Navbar />

      {/* Barra de Pesquisa */}
      <div
        className="flex flex-col gap-10"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px" }}
      >
        <div className="m-auto w-full sm:w-[70%] lg:w-[50%]">
          <div className="m-auto flex items-center justify-center gap-2 rounded-lg p-3 shadow-custom sm:p-4">
            <Search color="#a5a5a5" />
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Pesquise eventos, categorias, localização."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex w-full flex-col gap-6 lg:flex-row lg:px-10">
          {/* LADO ESQUERDO - FILTROS */}
          <div className="w-full lg:w-fit">
            <div className="flex flex-col gap-3">
              <p className="flex items-center gap-2 font-montserrat font-bold">
                FILTRO
                <ChevronRight />
              </p>
              <div className="w-full border border-gray-300 px-3 py-4 lg:w-[230px]">
                <div className="flex flex-col gap-3">
                  <p className="flex font-montserrat text-sm font-bold text-darker">
                    CATEGORIA
                  </p>
                  <div className="flex flex-col gap-2">
                    {[
                      "Entretenimento",
                      "Educação",
                      "Culturas",
                      "Esportes",
                      "Tecnologias",
                      "Viagens",
                    ].map((cat) => (
                      <p
                        key={cat}
                        className="font-opensans text-sm text-darker"
                      >
                        <input
                          className="mr-3"
                          type="checkbox"
                          value={cat}
                          checked={category.includes(cat)}
                          onChange={toggleCategory}
                        />
                        {cat}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DIREITO - LISTA DE EVENTOS */}
          <div className="w-full">
            <div className="flex items-center justify-end gap-3">
              <p className="font-opensans text-dark">Ordenar por:</p>
              <select
                className="rounded-lg border border-gray-300 p-2"
                value={sortType}
                onChange={(e) =>
                  setSortType(
                    e.target.value as "relevante" | "low-high" | "high-low",
                  )
                }
              >
                <option value="relevante">Relevante</option>
                <option value="low-high">Preço: Menor - Maior</option>
                <option value="high-low">Preço: Maior - Menor</option>
              </select>
            </div>

            {/* Grid de Eventos */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filterEvents.map((item, index) => (
                <EventsItem
                  key={index}
                  id={item._id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  local={item.local}
                  time={item.time}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
