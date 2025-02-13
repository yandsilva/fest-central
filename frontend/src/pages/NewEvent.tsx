import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ViaCep from "../components/ViaCep";
import ImageEvent from "../components/ImageEvent";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const newEventSchema = z.object({
  name: z.string().min(3, { message: "Nome deve ter no mínimo 3 caracteres" }),
  date: z.string().min(8, { message: "Data inválida" }),
  time: z.string().min(5, { message: "Horario inválido" }),
  // Location
  zipCode: z
    .string()
    .min(8, { message: "CEP deve ter no mínimo 8 caracteres" }),
  street: z
    .string()
    .min(10, { message: "Rua deve ter no mínimo 10 caracteres" }),
  number: z.string().min(1, { message: "Número inválido" }),
  complement: z.string().optional(),
  neighborhood: z
    .string()
    .min(3, { message: "Bairro deve ter no mínimo 3 caracteres" }),
  city: z
    .string()
    .min(3, { message: "Cidade deve ter no mínimo 3 caracteres" }),
  state: z
    .string()
    .min(2, { message: "Estado deve ter no mínimo 2 caracteres" }),
  //Description
  description: z
    .string()
    .min(10, { message: "Descrição deve ter no mínimo 10 caracteres" }),

  ticketName: z.string().min(1, { message: "Nome inválido" }),
  ticketPrice: z.string().min(1, { message: "Preço inválido" }),
  categoriesId: z
    .string()
    .min(1, { message: "Selecione uma categoria válida" }),

  image: z
    .any()
    .refine((files) => files?.length === 1, "Imagem é obrigatória")
    .refine(
      (files) => files?.[0]?.type.startsWith("image/"),
      "Formato inválido, use uma imagem",
    ),
});

export type NewEventFormProps = z.infer<typeof newEventSchema>;

interface CategoryProps {
  id: string;
  name: string;
}

export default function NewEvent() {
  const [categoriesId, setCategoriesId] = useState<CategoryProps[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewEventFormProps>({
    mode: "onChange",
    resolver: zodResolver(newEventSchema),
  });

  const navigateTo = useNavigate();
  console.log(errors);

  async function onHandleSubmit(data: NewEventFormProps) {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("date", data.date);
      formData.append("time", data.time);
      formData.append("zipCode", data.zipCode);
      formData.append("street", data.street);
      formData.append("number", data.number.toString());
      formData.append("complement", data.complement || "");
      formData.append("neighborhood", data.neighborhood);
      formData.append("city", data.city);
      formData.append("state", data.state);
      formData.append("description", data.description);
      formData.append("ticketName", data.ticketName);
      formData.append("ticketPrice", data.ticketPrice);
      formData.append("categoriesId", data.categoriesId);
      formData.append("image", data.image);

      console.log(data.categoriesId);

      const response = await axios.post(
        "http://localhost:3333/api/v1/events/register",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      toast.success(response.data.message);

      navigateTo("/");
    } catch (error) {
      toast.error("Erro ao criar evento");
      console.log(error);
    }
  }

  useEffect(() => {
    async function getCategories() {
      try {
        const response = await axios.get(
          "http://localhost:3333/api/v1/events/get-category",
        );
        setCategoriesId(response.data.categories);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  return (
    <div>
      <Navbar />
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 20px" }}
      >
        <div className="m-auto mb-10 mt-10 flex max-w-[80%] flex-col gap-10">
          <div>
            <p className="font-montserrat text-3xl font-bold text-darker">
              Criar um novo evento
            </p>
          </div>
          {/* EVENT DETAILS */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Detalhes do evento
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Nome do Evento
                </p>
                <input
                  {...register("name")}
                  className="w-3/4 rounded-md border p-2"
                  type="text"
                  placeholder="Nome do Evento"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </label>
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Categorias
                </p>
                <select
                  {...register("categoriesId")}
                  className="w-3/4 rounded-md border p-2"
                >
                  {categoriesId.map((category) => {
                    return (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    );
                  })}
                </select>
                {errors.categoriesId && (
                  <p className="text-red-500">{errors.categoriesId.message}</p>
                )}
              </label>
            </div>
          </div>

          {/* DATE & TIME */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Data & Horário
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">Data</p>
                <input
                  {...register("date")}
                  className="w-3/4 rounded-md border p-2"
                  type="date"
                  placeholder="Nome do Evento"
                />
                {errors.date && (
                  <p className="text-red-500">{errors.date.message}</p>
                )}
              </label>
              <label className="flex items-center justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Horário
                </p>
                <input
                  {...register("time")}
                  className="w-3/4 rounded-md border p-2"
                  type="time"
                  placeholder="Nome do Evento"
                />
                {errors.time && (
                  <p className="text-red-500">{errors.time.message}</p>
                )}
              </label>
            </div>
          </div>

          {/* LOCATION */}
          <ViaCep register={register} errors={errors} />

          {/* DESCRIPTION */}
          <div className="flex flex-col gap-3">
            <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
              Informações adicionais
            </p>
            <div className="flex w-2/3 flex-col gap-5">
              <label className="flex justify-end gap-2">
                <p className="font-opensans font-semibold text-darker">
                  Descrição do evento
                </p>
                <textarea
                  {...register("description")}
                  className="h-40 w-3/4 rounded-md border p-2"
                  placeholder="Descreva o que há de especial no seu evento e outros detalhes importantes."
                />
                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </label>
            </div>
          </div>
        </div>
        {/* IMAGES */}
        <ImageEvent register={register} errors={errors} />

        {/* PRICE AND TICKET */}

        <div className="m-auto flex w-[80%] flex-col gap-3 pb-10">
          <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
            Quais ingressos você está vendendo?
          </p>
          <div className="ml-44 flex w-[50%] flex-col gap-5">
            <label className="flex flex-col gap-2">
              <p className="font-opensans font-semibold text-dark">
                Nome do Ticket
              </p>
              <input
                {...register("ticketName")}
                className="rounded-md border p-2 outline-none"
                type="text"
                placeholder="Nome do Ticket"
              />
              {errors.ticketName && (
                <p className="text-red-500">{errors.ticketName.message}</p>
              )}
            </label>
            <label className="flex flex-col gap-2">
              <p className="font-opensans font-semibold text-dark">
                Preço do Ticket
              </p>
              <div className="flex w-full items-center gap-2 rounded-md border">
                <span className="bg-slate-300 p-2">R$</span>
                <input
                  {...register("ticketPrice")}
                  className="w-full outline-none"
                  type="number"
                />
                {errors.ticketPrice && (
                  <p className="text-red-500">{errors.ticketPrice.message}</p>
                )}
              </div>
            </label>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="m-auto flex w-[80%] flex-col items-end gap-3 pb-10">
          <button className="w-fit rounded-md bg-dark p-3 font-opensans font-semibold text-white">
            Publicar Evento
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
}
