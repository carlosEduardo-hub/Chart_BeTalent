import { Employee } from "@/components/main_section";
import api from "@/http/api";
import { useQuery } from "@tanstack/react-query";

const getData = async (): Promise<Employee[]> => {
  // Simula um atraso de 5 segundos antes de realizar a requisição
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const response = await api.get("/employees");
  console.log(response.data);
  return response.data;
};

export function useEmployeesData() {
  const query = useQuery({
    queryKey: ["employees"],
    queryFn: getData,
    refetchInterval: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  return query;
}
