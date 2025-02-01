import { ArrowLeft, CalendarDays, Clock5 } from "lucide-react";
import { Link } from "react-router-dom";
import img_1 from "../assets/img_1.png";
import { IoTicket } from "react-icons/io5";
import { Button } from "./ui/button";

type CreateEventProps = {
  onBack: () => void;
};

export default function CreateEvent3({ onBack }: CreateEventProps) {
  return (
    <div className="mb-20 flex flex-col gap-16 text-darker">
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
      <p className="m-auto w-[86%] font-opensans font-light text-darker">
        Quase lá! Verifique se tudo está correto.
      </p>

      <div className="m-auto flex w-5/6 flex-col gap-10 rounded-2xl border-2 border-dark p-8">
        <div className="m-auto w-full">
          <img
            className="max-h-[400px] w-full rounded-2xl"
            src={img_1}
            alt=""
          />
        </div>
        <p className="-mt-5 font-opensans text-4xl font-extrabold">
          Titulo do Evento
        </p>

        {/* DATA E HORA */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-3">
            <p className="font-opensans text-2xl font-bold">Data e Hora</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CalendarDays />
                <p className="font-opensans text-sm font-semibold">
                  27/01/2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock5 />
                <p className="font-opensans text-sm font-semibold">02:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mr-5 flex flex-col gap-3">
            <p className="font-opensans text-2xl font-bold">
              Informações sobre o Ticket
            </p>
            <div className="flex gap-2">
              <IoTicket size={25} />
              <p className="font-opensans text-sm font-semibold">
                Tipo de Ticket: <span>Preço/Grátis</span>
              </p>
            </div>
          </div>
        </div>
        {/* LOCALIZAÇÃO */}
        <div className="flex flex-col gap-3">
          <p className="font-opensans text-2xl font-bold">Localização</p>
          <div className="flex w-fit flex-col gap-1 rounded-md border-2 border-dark/50 py-4 pl-2 pr-16">
            <p className="font-opensans font-medium">CEP:1234545676 </p>
            <p className="font-opensans font-medium">
              Rua: ASDFASDFASDF <span>Nºasasdfadfasd</span>
            </p>
            <p className="font-opensans font-medium">Bairro: asdfasdfasdf</p>
            <p className="font-opensans font-medium">Cidade: fadfasdfasdfaf</p>
            <p className="font-opensans font-medium">Estado: fasdfasdfadsf</p>
          </div>
        </div>
        {/* REDES SOCIAIS */}
        <div className="flex flex-col gap-3">
          <p className="font-opensans text-2xl font-bold">Hosted by</p>
          <div className="flex gap-2">
            <div className="h-16 w-16 rounded-lg bg-dark/50"></div>
            <div className="flex flex-col justify-between">
              <p className="font-opensans font-semibold">Host Name</p>
              <div className="flex gap-2">
                <button className="rounded-md border border-dark px-2 py-1 font-opensans text-sm font-semibold transition ease-out hover:bg-dark hover:text-white">
                  Contato
                </button>
                <button className="rounded-md border border-dark bg-dark px-2 py-1 font-opensans text-sm font-semibold text-white transition ease-in-out hover:text-yellow">
                  + Follow
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* DESCRIÇÃO */}
        <div className="flex flex-col gap-3">
          <p className="font-opensans text-2xl font-bold">Descrição</p>
          <div>
            <p className="font-opensans text-sm font-medium">
              Prepare-se para uma aventura emocionante no coração da natureza
              com o Desafio das Montanhas, um evento de trilha de bicicleta que
              reúne atletas e entusiastas do ciclismo em um percurso desafiador
              e inesquecível. Este evento é ideal para quem busca superar
              limites, explorar paisagens deslumbrantes e viver uma experiência
              repleta de adrenalina. O trajeto atravessa trilhas sinuosas,
              ladeiras íngremes, descidas emocionantes e trechos planos,
              passando por rios, florestas nativas e mirantes que proporcionam
              vistas panorâmicas espetaculares. Sinalização adequada e pontos de
              hidratação estarão disponíveis ao longo do caminho para garantir
              segurança e conforto.
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-[90%] justify-end gap-5">
        <Button size={"lg"} variant={"secondary"}>
          Salvar & Continuar
        </Button>
      </div>
    </div>
  );
}
