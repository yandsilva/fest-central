export default function NewsLetter() {
  return (
    <div className="bg-yellow">
      <div className="m-auto flex w-full flex-col items-center justify-between gap-5 px-5 py-10 md:w-[80%] md:flex-row">
        <div className="">
          <p className="font-montserrat text-xl font-medium sm:text-3xl">
            Receba noticias sobre eventos
          </p>
          <p className="font-opensans text-sm font-normal sm:text-base">
            Receba noticias semanais e atualizações com novos eventos de seus
            organizadores e locais favoritos.
          </p>
        </div>
        <div className="flex h-14 w-full rounded-md bg-white md:w-[600px]">
          <input
            className="w-full rounded-l-md px-2"
            type="text"
            placeholder="Seu email"
          />
          <button className="flex-none rounded-r-md bg-darker px-5 font-opensans font-bold text-yellow">
            Inscreva-se
          </button>
        </div>
      </div>
    </div>
  );
}
