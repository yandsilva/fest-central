import { UseFormRegister, FieldErrors } from "react-hook-form";
import { NewEventFormProps } from "../pages/NewEvent";

interface ViaCepProps {
  register: UseFormRegister<NewEventFormProps>;
  errors: FieldErrors<NewEventFormProps>;
}

export default function ViaCep({ register, errors }: ViaCepProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
        Localização
      </p>
      <div className="flex w-2/3 flex-col gap-5">
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">CEP:</p>
          <input
            {...register("zipCode")}
            className="w-3/4 rounded-md border p-2"
            type="number"
            placeholder="CEP"
          />
          {errors.zipCode && (
            <span className="text-red-500">{errors.zipCode.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Rua:</p>
          <input
            {...register("street")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Rua"
          />
          {errors.street && (
            <span className="text-red-500">{errors.street.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Numero:</p>
          <input
            {...register("number")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Numero"
          />
          {errors.number && (
            <span className="text-red-500">{errors.number.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">
            Complemento:
          </p>
          <input
            {...register("complement")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Complemento"
          />
          {errors.complement && (
            <span className="text-red-500">{errors.complement.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Bairro:</p>
          <input
            {...register("neighborhood")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Bairro"
          />
          {errors.neighborhood && (
            <span className="text-red-500">{errors.neighborhood.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Cidade:</p>
          <input
            {...register("city")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Cidade"
          />
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Estado:</p>
          <input
            {...register("state")}
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Estado"
          />
          {errors.state && (
            <span className="text-red-500">{errors.state.message}</span>
          )}
        </label>
      </div>
    </div>
  );
}
