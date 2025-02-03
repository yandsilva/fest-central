import { ChangeEvent, useState } from "react";
import { FaCamera } from "react-icons/fa";

export default function AccountSettings() {
  // Estado para armazenar a URL da imagem selecionada
  const [image, setImage] = useState<string | null>(null);

  // Função para lidar com a seleção de arquivo
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Pega o primeiro arquivo selecionado

    if (file) {
      // Verifica o tipo do arquivo
      if (!file.type.startsWith("image/")) {
        alert("Por favor, selecione um arquivo de imagem.");
        return;
      }

      // Verifica o tamanho do arquivo (exemplo: 2MB)
      if (file.size > 2 * 1024 * 1024) {
        alert("O arquivo deve ter menos de 2MB.");
        return;
      }

      const reader = new FileReader();

      // Quando o FileReader terminar de ler o arquivo
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImage(reader.result); // Define a imagem no estado
        }
      };

      reader.readAsDataURL(file); // Converte o arquivo para uma URL de dados
    }
  };

  return (
    <div className="m-10 flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="font-montserrat text-2xl font-bold text-darker">
          Informações da conta
        </h2>
        <hr />
      </div>
      <div>
        <div className="ml-32 flex flex-col gap-4">
          <div>
            <p className="font-montserrat text-xl font-semibold text-darker">
              Foto de Perfil
            </p>
          </div>
          <div className="bg-lightGray relative h-28 w-28 rounded-full">
            {/* Exibe a imagem selecionada ou um placeholder */}
            {image ? (
              <img
                src={image}
                alt="Imagem do usuário"
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              <div className="h-full w-full rounded-full bg-gray-300" />
            )}

            {/* Input de arquivo oculto */}
            <input
              type="file"
              accept="image/*" // Aceita apenas arquivos de imagem
              onChange={handleImageChange}
              hidden
              id="image-upload"
            />

            {/* Ícone da câmera que aciona o input de arquivo */}
            <label
              htmlFor="image-upload"
              className="absolute bottom-0 right-0 cursor-pointer rounded-full border border-black bg-white p-2"
            >
              <FaCamera size={20} />
            </label>

            {/* Efeito decorativo (opcional) */}
            {image === null ? (
              <div className="absolute bottom-8 right-8 flex flex-col items-center gap-1">
                <div className="h-6 w-6 rounded-full bg-white" />
                <div className="h-6 w-12 rounded-3xl bg-white" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
