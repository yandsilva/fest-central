export default function ViaCep() {
  return (
    <div className="flex flex-col gap-3">
      <p className="ml-44 font-montserrat text-2xl font-medium text-darker">
        Localização
      </p>
      <div className="flex w-2/3 flex-col gap-5">
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">CEP:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="number"
            placeholder="CEP"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Rua:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Rua"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Numero:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Numero"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">
            Complemento:
          </p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Complemento"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Bairro:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Bairro"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Cidade:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Cidade"
          />
        </label>
        <label className="flex items-center justify-end gap-2">
          <p className="font-opensans font-semibold text-darker">Estado:</p>
          <input
            className="w-3/4 rounded-md border p-2"
            type="text"
            placeholder="Estado"
          />
        </label>
      </div>
    </div>
  );
}
