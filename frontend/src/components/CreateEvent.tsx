// CreateEvent.tsx
import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

// Tipos
export interface Step1Data {
  eventName: string;
  category: string;
  date: string;
  time: string;
  cep: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  description: string;
}

interface CreateEventProps {
  onContinue: () => void;
  updateData: (data: Step1Data) => void;
}

export default function CreateEvent({
  onContinue,
  updateData,
}: CreateEventProps) {
  const [formData, setFormData] = useState<Step1Data>({
    eventName: "",
    category: "",
    date: "",
    time: "",
    cep: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
    description: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateData(formData);
    onContinue();
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 p-4">
      <div className="flex items-center gap-4">
        <Link to="/">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-2xl font-bold">Criar Evento</h1>
      </div>

      <div className="space-y-6">
        {/* Nome e Categoria */}
        <div className="space-y-2">
          <label className="block font-medium">Nome do Evento:</label>
          <input
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />

          <label className="block font-medium">Categoria:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          >
            <option value="">Selecione</option>
            <option value="Entretenimento">Entretenimento</option>
            <option value="Esportes">Esportes</option>
            <option value="Educação">Educação</option>
          </select>
        </div>

        {/* Data e Hora */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Data:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded border p-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Hora:</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded border p-2"
              required
            />
          </div>
        </div>

        {/* Endereço */}
        <div className="space-y-2">
          <label className="block font-medium">CEP:</label>
          <input
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Rua:</label>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Número:</label>
              <input
                name="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Bairro:</label>
              <input
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Cidade:</label>
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded border p-2"
                required
              />
            </div>
          </div>

          <label className="block font-medium">Estado:</label>
          <input
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full rounded border p-2"
            required
          />
        </div>

        {/* Descrição */}
        <div>
          <label className="block font-medium">Descrição:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="h-32 w-full rounded border p-2"
            required
          />
        </div>
      </div>

      <Button type="submit" className="mt-8">
        Continuar
      </Button>
    </form>
  );
}
