import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ChevronDown } from "lucide-react";
import { DescriptionTableMobile } from "./description_table_mobile";
import { useState } from "react";


export interface TableRowProps {
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getUTCDate()).padStart(2, '0');
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); 
  const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
};


const formatPhone = (phone: string) => {
  const regex = /(\d{2})(\d{2})(\d{5})(\d{4})/;
  return phone.replace(regex, '+55 ($1) $2$3-$4');
};

export function TableRow({
  image,
  name,
  job,
  admission_date,
  phone,
}: TableRowProps) {
  // Estado para controlar a expansão do item
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white min-h-[52px] mx-20 sm:mx-32 shadow-shadow1 mb-[1px]">
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-5 mx-20 sm:mx-32 h-full items-center my-2">
        {/* Ajuste para Mobile */}
        <div className="grid grid-cols-2 sm:hidden items-center">
          <Avatar className="size-9">
            <AvatarImage src={image} alt="photo" />
            <AvatarFallback>photo</AvatarFallback>
          </Avatar>
          <h3 className="text-black-neutral text-base font-normal whitespace-nowrap">
            {name}
          </h3>
        </div>
        {/* Ajuste para Mobile */}

        {/* Ajuste para Web */}
        <Avatar className="size-9 hidden sm:block">
          <AvatarImage src={image} alt="photo" />
          <AvatarFallback>photo</AvatarFallback>
        </Avatar>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">
          {name}
        </h3>
        {/* Ajuste para Web */}

        <div
          className="size-32 ml-auto -mr-1 sm:hidden flex items-center justify-center cursor-pointer transition-transform duration-500"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <ChevronDown
            className={`text-blue-primary transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>

        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">
          {job}
        </h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">
          {formatDate(admission_date)}
        </h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">
          {formatPhone(phone)}
        </h3>
      </div>

      {/* Div que se movimenta com o click do icone */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* Exibindo os dados de cada funcionário, mas agora já passados por props */}
        <DescriptionTableMobile
          job={job}
          admission_date={admission_date}
          phone={phone}
        />
      </div>
    </div>
  );
}
