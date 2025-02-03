import { ArrowLeft, CalendarDays, Clock5 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IoTicket } from "react-icons/io5";

interface EventDetails {
  title: string;
  date: string;
  time: string;
  location: {
    cep: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
  };
  ticketType: "paid" | "free";
  ticketPrice?: string;
  description: string;
  image: string;
  hostName: string;
}

interface CreateEvent3Props {
  onBack: () => void;
  onSubmit: () => void;
  eventData: EventDetails;
}

export default function CreateEvent3({
  onBack,
  onSubmit,
  eventData,
}: CreateEvent3Props) {
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
          <h2 className="text-2xl font-bold">{eventData.title}</h2>
        </div>
        <div className="ml-4">
          <p>
            {eventData.location.street}, {eventData.location.number}
          </p>
          <p>
            {eventData.date} • {eventData.time}
          </p>
        </div>
      </div>

      {/* Preview do Evento */}
      <div className="space-y-6">
        <p className="text-center text-gray-600">
          Verifique se tudo está correto
        </p>

        <div className="rounded-xl border p-6 shadow-sm">
          {/* Imagem */}
          <img
            src={eventData.image}
            alt="Evento"
            className="mb-6 h-64 w-full rounded-lg object-cover"
          />

          {/* Data e Ingressos */}
          <div className="flex flex-wrap justify-between gap-4 border-b pb-4">
            <div className="space-y-2">
              <p className="font-semibold">Data e Hora</p>
              <div className="flex items-center gap-2">
                <CalendarDays size={20} />
                <span>{eventData.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock5 size={20} />
                <span>{eventData.time}</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold">Ingressos</p>
              <div className="flex items-center gap-2">
                <IoTicket size={20} />
                <span>
                  {eventData.ticketType === "paid"
                    ? `R$ ${eventData.ticketPrice}`
                    : "Evento Gratuito"}
                </span>
              </div>
            </div>
          </div>

          {/* Localização */}
          <div className="border-b py-4">
            <p className="mb-2 font-semibold">Localização</p>
            <div className="space-y-1 text-sm">
              <p>CEP: {eventData.location.cep}</p>
              <p>
                Rua: {eventData.location.street}, Nº {eventData.location.number}
              </p>
              <p>Bairro: {eventData.location.neighborhood}</p>
              <p>Cidade: {eventData.location.city}</p>
              <p>Estado: {eventData.location.state}</p>
            </div>
          </div>

          {/* Organizador */}
          <div className="border-b py-4">
            <p className="mb-2 font-semibold">Organizado por</p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200" />
              <div>
                <p className="font-medium">{eventData.hostName}</p>
                <div className="mt-2 flex gap-2">
                  <Button variant="outline" size="sm">
                    Contato
                  </Button>
                  <Button size="sm">Seguir</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="pt-4">
            <p className="mb-2 font-semibold">Descrição</p>
            <p className="text-sm text-gray-600">{eventData.description}</p>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div className="flex justify-end gap-4">
        <Button variant="outline" onClick={onBack}>
          Voltar
        </Button>
        <Button onClick={onSubmit}>Publicar Evento</Button>
      </div>
    </div>
  );
}
