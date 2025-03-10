import { useEffect, useState } from "react";
import { SearchSection } from "./search_section";
import { TableHeader } from "./table_header";
import { TableRow } from "./table_row";
import api from "@/http/api";

export interface Employee {
  id: number;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

export function MainSection() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [, setSearchTerm] = useState<string>("");

  const getData = async () => {
    try {
      const response = await api.get("/employees");
      setEmployees(response.data);
      setFilteredEmployees(response.data); 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  const filterEmployees = (term: string) => {
    const lowerTerm = term.toLowerCase();
    const filtered = employees.filter((employee) =>
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-[335px] sm:max-w-6xl mx-auto flex flex-col justify-center mb-40">
      <div className="space-y-32">
        <SearchSection onSearch={handleSearch} />
        <TableHeader />
      </div>
      
      {filteredEmployees.map((employee) => (
        <TableRow
          key={employee.id} 
          image={employee.image}
          name={employee.name}
          job={employee.job}
          admission_date={employee.admission_date}
          phone={employee.phone}
        />
      ))}
    </div>
  );
}
