import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { IoTicketOutline } from "react-icons/io5";
import { Button } from "./ui/button";
import { ChangeEvent, useState } from "react";

type TicketType = "paid" | "free";

interface CreateEvent2Props {
  onBack: () => void;
  onContinue: () => void;
  updateData: (data: {
    ticketType: TicketType;
    ticketName: string;
    ticketPrice: string;
  }) => void;
}

interface TicketData {
  type: TicketType;
  name: string;
  price: string;
}

export default function CreateEvent2({
  onBack,
  onContinue,
  updateData,
}: CreateEvent2Props) {
  const [ticketData, setTicketData] = useState<TicketData>({
    type: "paid",
    name: "",
    price: "",
  });

  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const numericValue = e.target.value
      .replace(/[^\d,]/g, "")
      .replace(/(\..*)\./g, "$1");

    setTicketData((prev) => ({
      ...prev,
      price: numericValue,
    }));
  };

  const handleSubmit = () => {
    updateData({
      ticketType: ticketData.type,
      ticketName: ticketData.name,
      ticketPrice: ticketData.type === "paid" ? ticketData.price : "0",
    });
    onContinue();
  };

  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <Link
            to=""
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
          >
            <ArrowLeft size={30} />
          </Link>
          <h2 className="text-2xl font-bold">Título do Evento</h2>
        </div>
        <div className="ml-4">
          <p>Location</p>
          <p>Time</p>
        </div>
      </div>

      {/* Seleção de tipo de ingresso */}
      <div className="space-y-4">
        <p className="text-xl font-medium">Tipo de Evento</p>
        <div className="flex gap-4">
          {(["paid", "free"] as TicketType[]).map((type) => (
            <button
              key={type}
              onClick={() => setTicketData((prev) => ({ ...prev, type }))}
              className={`w-48 rounded-md border-2 p-4 ${
                ticketData.type === type
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                {type === "paid" ? (
                  <IoTicketOutline size={40} />
                ) : (
                  <span className="text-3xl">🎫</span>
                )}
                <p className="font-semibold">
                  {type === "paid" ? "Evento Pago" : "Evento Gratuito"}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detalhes dos ingressos */}
      <div className="space-y-4">
        <p className="text-xl font-medium">Detalhes dos Ingressos</p>

        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-2 block font-medium">Nome do Ingresso</label>
            <input
              value={ticketData.name}
              onChange={(e) =>
                setTicketData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full rounded-md border p-2"
              placeholder="Ex: Entrada Geral"
            />
          </div>

          {ticketData.type === "paid" && (
            <div>
              <label className="mb-2 block font-medium">Preço</label>
              <div className="flex items-center rounded-md border">
                <span className="bg-gray-100 px-3">R$</span>
                <input
                  type="text"
                  value={ticketData.price}
                  onChange={handlePriceChange}
                  className="w-32 border-none p-2"
                  placeholder="0,00"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="mt-8 flex justify-end gap-4">
        <Button variant="outline" size="lg" onClick={onBack}>
          Voltar
        </Button>
        <Button variant="secondary" size="lg" onClick={handleSubmit}>
          Continuar
        </Button>
      </div>
    </div>
  );
}
