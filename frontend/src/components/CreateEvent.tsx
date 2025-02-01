import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

type CreateEventProps = {
  onContinue: () => void;
};

export default function CreateEvent({ onContinue }: CreateEventProps) {
  return (
    <div className="flex flex-col gap-20 text-darker">
      <div className="flex items-center gap-10">
        <Link to={"/"}>
          <ArrowLeft size={30} />
        </Link>
        <h2 className="font-montserrat text-4xl font-bold text-darker">
          Criar Novo Evento
        </h2>
      </div>
      <div className="m-auto flex w-[80%] flex-col gap-20">
        <div className="flex w-full flex-col gap-5">
          <p className="ml-32 font-montserrat text-2xl font-semibold">
            Detalhes do Evento
          </p>
          <div className="flex w-2/3 flex-col gap-5">
            <div className="flex items-center justify-end gap-2">
              <label className="font-opensans font-semibold">
                Nome Evento:
              </label>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o nome do evento"
              />
            </div>
            <div className="flex items-center justify-end gap-2">
              <label className="font-opensans font-semibold">Categoria:</label>
              <div className="w-4/5 rounded-sm border border-black/50">
                <select className="w-full cursor-pointer p-2">
                  <option value="Entretenimento">Entretenimento</option>
                  <option value="Educação & Negócios">
                    Educação & Negócios
                  </option>
                  <option value="Culturas & Artes">Culturas & Artes</option>
                  <option value="Esportes & Fitness">Esportes & Fitness</option>
                  <option value="Tecnologias & Inovação">
                    Tecnologias & Inovação
                  </option>
                  <option value="Viagens & Aventuras">
                    Viagens & Aventuras
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="ml-32 font-montserrat text-2xl font-semibold">
            Data e Hora
          </p>
          <div className="ml-14 flex items-start gap-5">
            <div className="flex items-center gap-5">
              <label className="font-opensans font-semibold">Sessão:</label>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex w-52 flex-col gap-2">
                <p className="font-opensans font-semibold">Data</p>
                <input
                  className="rounded-md border border-black/50 p-1 font-semibold"
                  type="date"
                />
              </div>
              <div className="flex w-52 flex-col gap-2">
                <p className="font-opensans font-semibold">Horario</p>

                <input
                  className="rounded-md border border-black/50 p-1 font-semibold"
                  type="time"
                />
              </div>
            </div>
          </div>
        </div>
        {/* ENDEREÇO */}
        <div className="flex w-full flex-col gap-5">
          <p className="ml-32 font-montserrat text-2xl font-semibold">
            Localização
          </p>
          <div className="flex w-2/3 flex-col gap-5">
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">CEP:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">Rua:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">Numero:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">Bairro:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">Cidade:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
            <div className="flex items-center justify-end gap-5">
              <p className="font-opensans font-semibold">Estado:</p>
              <input
                className="w-4/5 rounded-sm border border-black/50 p-2"
                type="text"
                placeholder="Insira o endereço"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-5">
          <p className="ml-32 font-montserrat text-2xl font-semibold">
            Informações Adicionais
          </p>
          <div className="flex justify-end gap-5">
            <p className="font-opensans font-semibold">Descrição:</p>
            <textarea
              className="h-40 w-[86.5%] rounded-sm border p-2"
              placeholder="Insira a descrição do evento"
            />
          </div>
        </div>
      </div>

      <div className="my-10 flex w-[90%] justify-end gap-5">
        <Button onClick={onContinue} size={"lg"} variant={"secondary"}>
          Salvar & Continuar
        </Button>
      </div>
    </div>
  );
}
