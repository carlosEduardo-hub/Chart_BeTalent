import { useEffect, useState } from "react";
import { SearchSection } from "./search_section";
import { TableHeader } from "./table_header";
import { TableRow } from "./table_row";
import { useEmployeesData } from "@/hooks/useEmployeesData";
import { Loader } from "lucide-react";

export interface Employee {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}


export function MainSection() {
  const { data = [], isLoading } = useEmployeesData(); // Inicializa data com um array vazio caso esteja undefined
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setFilteredEmployees(data); // Atualiza os funcionários filtrados quando os dados são carregados
  }, [data]);

  const filterEmployees = (term: string) => {
    const lowerTerm = term.toLowerCase();
    const filtered = data.filter(
      (employee: Employee) =>
        employee.name.toLowerCase().includes(lowerTerm) ||
        employee.job.toLowerCase().includes(lowerTerm) ||
        employee.phone.includes(lowerTerm)
    );
    setFilteredEmployees(filtered);
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    filterEmployees(searchTerm);
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
