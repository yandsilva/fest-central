import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../store/store";
import { clearAllUserErrors, createUser } from "../store/slice/userSlice";
import { toast } from "react-toastify";

const createUserSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter no mínimo 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string()
    .min(8, { message: "Senha deve ter no mínimo 8 caracteres" }),
});

type CreateFormProps = z.infer<typeof createUserSchema>;

export default function CreateLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormProps>({
    mode: "onChange",
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      name: "Yan",
      email: "yan@gmail.com",
      password: "12345678",
    },
  });

  const dispatch = useAppDispatch();
  const { loading, isAuthenticated, error } = useAppSelector(
    (state) => state.user,
  );

  const navigateTo = useNavigate();

  const createHandleSubmitForm = (data: CreateFormProps) => {
    dispatch(
      createUser({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
    );
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }

    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [isAuthenticated, error, loading, dispatch, navigateTo]);

  return (
    <div className="flex h-[100vh] w-full justify-center bg-dark">
      <div className="hidden flex-col p-10 lg:flex lg:flex-1">
        <Link to="/" className="flex items-center justify-start">
          <img className="w-14" src={assets.ticket} alt="" />
          <h2 className="font-lalezar text-3xl text-yellow">FestCentral</h2>
        </Link>
        <div className="flex h-[60vh] flex-col justify-center pl-10">
          <p className="font-montserrat text-4xl font-semibold text-white">
            Descubra eventos exclusivos e inscreva-se para receber recomendações
            personalizadas agora mesmo!
          </p>
        </div>
      </div>
      <div className="relative flex w-[700px] flex-col rounded-l-[40px] rounded-r-[40px] bg-white p-20 lg:rounded-l-[40px] lg:rounded-r-none">
        {/* CREATE ACCOUNT */}

        <form
          onSubmit={handleSubmit(createHandleSubmitForm)}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-10">
            <p className="justify-center font-montserrat text-2xl font-bold text-darker sm:flex sm:justify-start sm:text-4xl">
              Crie sua conta
            </p>
            <div className="flex flex-col justify-between gap-3 sm:flex sm:flex-row">
              <a
                href="https://workspace.google.com/intl/pt-BR/gmail/"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-lg border border-gray-300 p-3 transition ease-in-out hover:bg-gray-50"
              >
                <img className="w-5 sm:w-8" src={assets.google_play} alt="" />
                <p className="font-opensans text-sm sm:text-base">
                  Inscreva-se no Google
                </p>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-lg border border-gray-300 p-3 transition ease-in-out hover:bg-gray-50"
              >
                <img className="w-5 sm:w-8" src={assets.facebook_icon} alt="" />
                <p className="font-opensans text-sm sm:text-base">
                  Inscreva-se no Google
                </p>
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[1px] w-full bg-slateGray opacity-30"></div>
            <p className="px-2">OU</p>
            <div className="h-[1px] w-full bg-slateGray opacity-30"></div>
          </div>
          <div className="flex flex-col gap-5 font-opensans">
            <div className="flex flex-col gap-2 text-sm">
              <p>Nome Completo</p>
              <input
                {...register("name")}
                className="rounded-md border p-4"
                type="text"
                placeholder="Nome Completo"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p>E-mail</p>
              <input
                {...register("email")}
                className="rounded-md border p-4"
                type="text"
                placeholder="Digite seu e-mail"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <p>Senha</p>
              <input
                {...register("password")}
                className="rounded-md border p-4"
                type="text"
                placeholder="Digite sua senha"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>
          </div>
          <Button
            className="font-opensans text-lg"
            size={"lg"}
            variant={"secondary"}
          >
            Criar Conta
          </Button>
          <div className="flex flex-col items-center gap-1 sm:flex sm:flex-row">
            <p className="font-opensans text-[#636363]">Já tem uma conta? </p>
            <Link
              to="/login"
              className="cursor-pointer px-2 font-opensans text-darker"
            >
              Login
            </Link>

            <Link to="/">
              <X
                size={30}
                className="absolute right-10 top-10 cursor-pointer"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
