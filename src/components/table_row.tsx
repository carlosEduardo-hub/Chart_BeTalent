import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { ChevronDown} from "lucide-react";
import { DescriptionTableMobile } from "./description_table_mobile";
import { useState } from "react";

export function TableRow() {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white min-h-[52px] mx-20 sm:mx-32 shadow-shadow1 mb-[1px]">
      <div className="grid grid-cols-2 sm:grid sm:grid-cols-5 mx-20 sm:mx-32 h-full items-center my-2">
        {/* Ajuste para Mobile */}
        <div className="grid grid-cols-2 sm:hidden items-center">
            <Avatar className="size-9">
                <AvatarImage src="https://github.com/carlosEduardo-hub.png" alt="photo" />
                <AvatarFallback>photo</AvatarFallback>
            </Avatar>
            <h3 className="text-black-neutral text-base font-normal whitespace-nowrap">Giovana L. Arruda</h3>
        </div>
        {/* Ajuste para Mobile */}

        {/* Ajuste para Web */}
        <Avatar className="size-9 hidden sm:block">
            <AvatarImage src="https://github.com/carlosEduardo-hub.png" alt="photo" />
            <AvatarFallback>photo</AvatarFallback>
        </Avatar>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">Giovana L. Arruda</h3>
        {/* Ajuste para Web */}

        {/* <div className="size-32 ml-auto sm:hidden -mr-1 flex items-center justify-center">
          <ChevronDown className="text-blue-primary cursor-pointer" />
        </div> */}

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
      
        
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">Front-end</h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">00/00/0000</h3>
        <h3 className="text-black-neutral text-base font-normal whitespace-nowrap hidden sm:block">+55 (55) 55555-555</h3>

      </div>

      {/* Div que se movimenta com o click do icone */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <DescriptionTableMobile />
      </div>
      
    </div>
  );
}
