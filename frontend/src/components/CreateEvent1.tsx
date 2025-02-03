import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChangeEvent } from "react";

type CreateEvent1Props = {
  onBack: () => void;
  onContinue: () => void;
  updateData: (data: { image: File | null }) => void;
};

export default function CreateEvent1({
  onBack,
  onContinue,
  updateData,
}: CreateEvent1Props) {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    updateData({ image: file }); // Atualiza diretamente o pai sem armazenar localmente
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

      {/* Upload de imagem */}
      <div className="space-y-4">
        <p className="text-xl font-medium">Upload Image</p>
        <Input
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="w-full max-w-md"
        />
        <div className="text-sm">
          <p>A imagem deve ter no mínimo 1170x504 pixels</p>
          <p>Formatos aceitos: .jpg, .jpeg, .png</p>
        </div>
      </div>

      {/* Botões de navegação */}
      <div className="mt-8 flex justify-end gap-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Voltar
        </Button>
        <Button onClick={onContinue} variant="secondary" size="lg">
          Continuar
        </Button>
      </div>
    </div>
  );
}
