import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type CreateEventProps = {
  onBack: () => void;
  onContinue: () => void;
};

export default function CreateEvent1({ onBack, onContinue }: CreateEventProps) {
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
        <p className="font-montserrat text-3xl font-medium">Upload Image</p>

        <Input className="flex w-1/2" type="file" />

        <div className="flex flex-col gap-1">
          <p className="font-montserrat font-medium">
            Feature Image must be at least 1170 pixels wide by 504 pixels high.
          </p>
          <p className="font-montserrat font-medium">
            The image must be a .jpg, .jpeg, or .png file.
          </p>
        </div>
      </div>
      <div className="mb-12 mt-40 flex w-[90%] justify-end gap-5">
        <Button
          onClick={onBack}
          className="font-montserrat font-semibold"
          variant={"outline"}
          size={"lg"}
        >
          Voltar para Editar Evento
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
