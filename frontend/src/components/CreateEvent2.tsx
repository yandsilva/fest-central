import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { assets } from "../assets/assets";
import { ChangeEvent, useState } from "react";
import { Button } from "./ui/button";

type CreateEventProps = {
  onBack: () => void;
  onContinue: () => void;
};

export default function CreateEvent2({
  onBack,
  onContinue,
}: CreateEventProps): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [showTicket, setShowTicket] = useState<boolean>(true);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const numericValue = e.target.value.replace(/[^\d,]/g, "");
    setValue(numericValue);
  };

  const handleBlur = (): void => {
    const numericValue = parseFloat(value.replace(",", ".") || "0");
    const formattedValue = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    }).format(numericValue);
    setValue(formattedValue.replace("R$", "").trim());
  };

  return (
    <div className="flex flex-col gap-20 text-darker">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-14">
          <Link onClick={onBack} to={""}>
            <ArrowLeft size={30} />
          </Link>
          <h2 className="font-montserrat text-4xl font-bold text-darker">
            Titulo do Evento
          </h2>
        </div>
        <div className="ml-[85px] flex flex-col gap-1 font-montserrat text-xl font-semibold">
          <p>Location</p>
          <p>Time</p>
        </div>
      </div>
      <div className="m-auto flex w-[80%] flex-col gap-5">
        <p className="font-montserrat text-2xl font-medium">
          Que tipo de evento você está organizando?
        </p>
        <div className="flex gap-5">
          <button
            onClick={() => setShowTicket(true)}
            className="flex w-[300px] flex-col items-center gap-2 rounded-md border-2 border-dark py-5 hover:bg-[#F6FBFF]"
          >
            <IoTicketOutline color="#2B293D" size={50} />
            <div>
              <p className="font-opensans text-sm font-semibold">
                Evento com ingressos
              </p>
              <p className="font-opensans text-sm">
                Meu evento requer ingressos para entrada
              </p>
            </div>
          </button>
          <button
            onClick={() => setShowTicket(false)}
            className="flex w-[300px] flex-col items-center gap-2 rounded-md border-2 border-dark p-5 hover:bg-[#F6FBFF]"
          >
            <img className="w-12" src={assets.ticket_free} alt="" />
            <div>
              <p className="font-opensans text-sm font-semibold">
                Evento Gratuito
              </p>
              <p className="font-opensans text-sm">
                Estou realizando um evento gratuito
              </p>
            </div>
          </button>
        </div>
        <div>
          <p className="font-montserrat text-2xl font-medium">
            Quais ingressos você está vendendo?
          </p>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex flex-col gap-1">
            <p className="font-opensans font-semibold">Nome do Ticket</p>
            <input
              className="w-96 rounded-md border p-2"
              placeholder="Exemplo: Admissão Geral"
            />
          </div>

          {showTicket && (
            <div className="flex flex-col gap-1">
              <p className="font-opensans font-semibold">Preço do Ticket</p>
              <div className="flex items-center rounded-md border">
                <p className="rounded-l-md bg-[#828282] p-2 font-semibold text-white">
                  R$
                </p>
                <input
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className="w-40 border-none p-2"
                  placeholder="0,00"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mb-12 mt-20 flex w-[90%] justify-end gap-5">
        <Button
          onClick={onBack}
          className="font-montserrat font-semibold"
          variant={"outline"}
          size={"lg"}
        >
          Voltar
        </Button>
        <Button
          onClick={onContinue}
          className="font-montserrat font-bold"
          variant={"secondary"}
          size={"lg"}
        >
          Salvar & Continuar
        </Button>
      </div>
    </div>
  );
}
