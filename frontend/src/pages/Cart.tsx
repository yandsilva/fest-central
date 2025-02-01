import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { event_list } from "../assets/assets";
import { IoStar, IoStarOutline, IoTicket } from "react-icons/io5";
import { useState } from "react";
import { CalendarDays, Clock5, Share2 } from "lucide-react";
import Footer from "../components/Footer";

export default function Cart() {
  const { id } = useParams();
  const [favorite, setFavorite] = useState(false);

  const event = event_list.find((event) => event._id === id);

  return (
    <div className="flex flex-col gap-10">
      <Navbar />

      <div
        className="mx-auto flex w-[75%] flex-col gap-10"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0" }}
      >
        <div className="mx-auto flex w-full flex-col">
          <img className="w-full rounded-2xl" src={event?.image} alt="" />
        </div>
        {/* TITLE AND FAVITE */}
        <div className="flex items-center justify-between">
          <h2 className="font-opensans text-4xl font-extrabold text-darker">
            {event?.name}
          </h2>
          <div className="flex items-center gap-4">
            <div onClick={() => setFavorite(!favorite)}>
              {favorite ? (
                <IoStar size={30} className="cursor-pointer" />
              ) : (
                <IoStarOutline size={30} className="cursor-pointer" />
              )}
            </div>
            <Share2 size={30} className="cursor-pointer" />
          </div>
        </div>

        {/* PRICE AND TICKET */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <p className="font-opensans text-2xl font-bold">Data e Hora</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CalendarDays color="#2D2C3C" />
                <p className="font-opensans text-sm font-semibold text-darker">
                  27/01/2025
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock5 color="#2D2C3C" />
                <p className="font-opensans text-sm font-semibold text-darker">
                  {event?.time}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <button className="flex items-center justify-center gap-2 rounded-lg bg-yellow p-2 px-10 py-3 text-white hover:bg-yellowHover">
              <IoTicket size={25} color="#2D2C3C" />
              <p className="font-opensans text-xl font-semibold text-darker">
                Comprar
              </p>
            </button>
            <div className="flex flex-col gap-2">
              <p className="font-opensans text-lg font-bold">
                Informações do Ticket
              </p>
              <div className="flex items-center gap-2">
                <IoTicket color="#2D2C3C" />
                <p className="font-opensans text-sm font-semibold text-darker">
                  Standard Ticket <span>R${event?.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex flex-col gap-3">
          <p className="font-opensans text-2xl font-bold">Localização</p>
          <div className="flex w-fit flex-col gap-1 rounded-md border-2 border-dark/50 py-4 pl-2 pr-16">
            <p className="font-opensans font-medium">CEP: {event?.cep} </p>
            <p className="font-opensans font-medium">
              Rua: {event?.rua} <span>Nº{event?.numero}</span>
            </p>
            <p className="font-opensans font-medium">Bairro: {event?.bairro}</p>
            <p className="font-opensans font-medium">Cidade: {event?.cidade}</p>
            <p className="font-opensans font-medium">Estado: {event?.estado}</p>
          </div>
        </div>

        {/* ABOUT */}
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

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-3">
          <p className="font-opensans text-2xl font-bold">Descrição</p>
          <div>
            <p className="text-justify font-opensans text-sm font-medium">
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
      <Footer />
    </div>
  );
}
