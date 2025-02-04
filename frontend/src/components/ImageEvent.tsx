import { useState } from "react";

export default function ImageEvent() {
  const [preview, setPreview] = useState<string | null>(null);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <div className="m-auto flex w-[80%] flex-col gap-3 pb-10">
      <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
        Upload da Imagem
      </p>
      <div className="ml-44 flex w-[50%] flex-col gap-5">
        {preview && (
          <img
            src={preview}
            alt="Pré-visualização"
            className="h-48 w-full object-cover"
          />
        )}
        <input
          type="file"
          onChange={handleImage}
          accept="image/*"
          className="avatar-update-btn"
        />
      </div>
    </div>
  );
}
