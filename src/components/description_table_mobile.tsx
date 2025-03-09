export function DescriptionTableMobile() {
  return (
    <div className="grid grid-cols-2 mx-5 my-7 sm:hidden">
      <div>
        <h2 className="text-black-neutral text-base font-medium border-b border-gray-10 border-dashed">
          Cargo
        </h2>
        <h2 className="text-black-neutral text-base font-medium whitespace-nowrap border-b border-gray-10 border-dashed">
          Data de admissão
        </h2>
        <h2 className="text-black-neutral text-base font-medium border-b border-gray-10 border-dashed">
          Telefone
        </h2>
      </div>

      <div className="ml-auto mr-1.5">
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          Front-end
        </h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          00/00/0000
        </h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          +55 (55) 55555-555
        </h3>
      </div>
    </div>
  );
}
