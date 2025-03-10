interface TableRowPropsMobile {
  job: string;
  admission_date: string;
  phone: string;
}

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getUTCDate()).padStart(2, "0");
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
  const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
};

const formatPhone = (phone: string) => {
  const regex = /(\d{2})(\d{2})(\d{5})(\d{4})/;
  return phone.replace(regex, "+55 ($1) $2$3-$4");
};

export function DescriptionTableMobile({
  job,
  admission_date,
  phone,
}: TableRowPropsMobile) {
  return (
    <div className="flex flex-col mx-5 my-7 sm:hidden">
      <div className="flex justify-between">
        <h2 className="text-black-neutral text-base font-medium border-b border-gray-10 border-dashed">
          Cargo
        </h2>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          {job}
        </h3>
      </div>

      <div className="flex justify-between">
        <h2 className="text-black-neutral text-base font-medium whitespace-nowrap border-b border-gray-10 border-dashed">
          Data de admissão
        </h2>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          {formatDate(admission_date)}
        </h3>
      </div>

      <div className="flex justify-between">
        <h2 className="text-black-neutral text-base font-medium border-b border-gray-10 border-dashed">
          Telefone
        </h2>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap text-right border-b border-gray-10 border-dashed">
          {formatPhone(phone)}
        </h3>
      </div>

    </div>
  );
}
