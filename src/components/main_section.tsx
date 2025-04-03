import { useCallback, useEffect, useState } from "react";
import { SearchSection } from "./search_section";
import { TableHeader } from "./table_header";
import { TableRow } from "./table_row";
import { useEmployeesData } from "@/hooks/useEmployeesData";
import { Loader } from "lucide-react";
import useDebounceValue from "@/hooks/use-debounce-value";

export interface Employee {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

// Função para normalizar strings (remover acentos e tornar minúsculas)
const normalizeString = (str: string) => 
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


export function MainSection() {
  const { data = [], isLoading } = useEmployeesData(); // Inicializa data com um array vazio caso esteja undefined
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(""); // Estado do termo de busca
  const debouncedSearchTerm = useDebounceValue(searchTerm, 400); // Aplica debounce de 400ms

  useEffect(() => {
    setFilteredEmployees(data); // Atualiza os funcionários filtrados quando os dados são carregados
  }, [data]);

  const filterEmployees = useCallback((term: string) => {
    const normalizedTerm = normalizeString(term);
  
    const filtered = data.filter((employee: Employee) =>
      [employee.name, employee.job, employee.phone]
        .map(normalizeString)
        .some((field) => field.includes(normalizedTerm))
    );
  
    setFilteredEmployees(filtered);
  }, [data]); // Agora filterEmployees só será recriada se `data` mudar

  useEffect(() => {
    if (debouncedSearchTerm.trim() !== "") {
      filterEmployees(debouncedSearchTerm);
    } else {
      setFilteredEmployees(data);
    }
  }, [debouncedSearchTerm, data, filterEmployees]); // Executa o filtro somente quando o debounce termina

 

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="max-w-[335px] sm:max-w-6xl mx-auto flex flex-col justify-center mb-40">
      <div className="space-y-32">
        <SearchSection onSearch={handleSearch} />
        <TableHeader />
      </div>

      

      {isLoading ? (
        <Loader className="mx-auto mt-5 text-gray-20 animate-spin"/>
      ) : (
        <>
          {filteredEmployees.length > 0 ? (
            filteredEmployees.map((employee) => (
              <TableRow
                key={employee.id}
                image={employee.image}
                name={employee.name}
                job={employee.job}
                admission_date={employee.admission_date}
                phone={employee.phone}
              />
            ))
          ) : (
            <p className="text-center mt-4">Nenhum funcionário encontrado.</p>
          )}
        </>
      )}
    </div>
  );
}
