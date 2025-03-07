export function TableHeader() {
  return (
    <div className="bg-blue-primary mx-20 sm:mx-32 h-12 rounded-t-lg shadow-shadow1">
      <div className="flex mx-20 sm:mx-32 h-full justify-between items-center">
        <h2 className="text-white text-base font-semibold">FOTO</h2>
        <h2 className="text-white text-base font-semibold mr-28 sm:mr-0">NOME</h2>
        <h2 className="text-white text-base font-semibold hidden sm:block">CARGO</h2>
        <h2 className="text-white text-base font-semibold hidden sm:block">DATA DE ADMISSÃO</h2>
        <h2 className="text-white text-base font-semibold hidden sm:block">TELEFONE</h2>
        <hr className="size-2 bg-white rounded-full -mr-2 sm:hidden"/>
      </div>
    </div>
  );
}
