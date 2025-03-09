export function TableHeader() {
  return (
    <div className="bg-blue-primary mx-20 sm:mx-32 h-12 rounded-t-lg shadow-shadow1">
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-5 mx-20 sm:mx-32 h-full  items-center">
        {/* Ajuste para Mobile */}
        <div className="grid grid-cols-2 sm:hidden items-center">
          <h2 className="text-white text-base font-semibold">FOTO</h2>
          <h2 className="text-white text-base font-semibold">NOME</h2>
        </div>
        {/* Ajuste para Mobile */}

        {/* Ajuste para Web */}
        <h2 className="hidden sm:block text-white text-base font-semibold">FOTO</h2>
        <h2 className="hidden sm:block text-white text-base font-semibold">NOME</h2>
        {/* Ajuste para Web */}

        <h2 className="text-white text-base font-semibold hidden sm:block">
          CARGO
        </h2>
        <h2 className="text-white text-base font-semibold hidden sm:block">
          DATA DE ADMISSÃO
        </h2>
        <h2 className="text-white text-base font-semibold hidden sm:block">
          TELEFONE
        </h2>
        <hr className="size-2 bg-white rounded-full ml-auto mr-2 sm:hidden" />
      </div>
    </div>
  );
}
