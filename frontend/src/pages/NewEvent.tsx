import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ViaCep from "../components/ViaCep";
import ImageEvent from "../components/ImageEvent";

export default function NewEvent() {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px" }}>
        <div className="m-auto mb-10 mt-10 flex max-w-[80%] flex-col gap-10">
          <div>
            <p className="font-montserrat text-3xl font-bold text-darker">
              Criar um novo evento
            </p>
          </div>
          {/* EVENT DETAILS */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Detalhes do evento
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Nome do Evento
                </p>
                <input
                  className="w-3/4 rounded-md border p-2"
                  type="text"
                  placeholder="Nome do Evento"
                />
              </label>
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Categorias
                </p>
                <select className="w-3/4 rounded-md border p-2">
                  <option value="">Entreterimento</option>
                  <option value="">Educação</option>
                  <option value="">Culturas</option>
                  <option value="">Esportes</option>
                  <option value="">Tecnologias</option>
                  <option value="">Viagens</option>
                </select>
              </label>
            </div>
          </div>

          {/* DATE & TIME */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Data & Horário
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">Data</p>
                <input
                  className="w-3/4 rounded-md border p-2"
                  type="date"
                  placeholder="Nome do Evento"
                />
              </label>
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Categorias
                </p>
                <input
                  className="w-3/4 rounded-md border p-2"
                  type="time"
                  placeholder="Nome do Evento"
                />
              </label>
            </div>
          </div>

          {/* LOCATION */}
          <ViaCep />

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Informações adicionais
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Descrição do evento
                </p>
                <textarea
                  className="h-40 w-3/4 rounded-md border p-2"
                  placeholder="Descreva o que há de especial no seu evento e outros detalhes importantes."
                />
              </label>
            </div>
          </div>
        </div>
        {/* IMAGES */}
        <ImageEvent />

        {/* PRICE AND TICKET */}

        <div className="m-auto flex w-[80%] flex-col gap-3 pb-10">
          <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
            Quais ingressos você está vendendo?
          </p>
          <div className="ml-44 flex w-[50%] flex-col gap-5">
            <label className="flex flex-col gap-2">
              <p className="font-opensans font-semibold text-dark">
                Nome do Ticket
              </p>
              <input
                className="rounded-md border p-2 outline-none"
                type="text"
                placeholder="Nome do Ticket"
              />
            </label>
            <label className="flex flex-col gap-2">
              <p className="font-opensans font-semibold text-dark">
                Preço do Ticket
              </p>
              <div className="flex w-full items-center gap-2 rounded-md border">
                <span className="bg-slate-300 p-2">R$</span>
                <input className="w-full outline-none" type="number" />
              </div>
            </label>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="m-auto flex w-[80%] flex-col items-end gap-3 pb-10">
          <button className="w-fit rounded-md bg-dark p-3 font-opensans font-semibold text-white">
            Publicar Evento
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
