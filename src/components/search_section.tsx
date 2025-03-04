// import { Search } from "lucide-react"; Utilizado Lucide-react
import SearchIcon from "../assets/icons/search.svg";

export function SearchSection() {
  return (
    <div className="ml-40 mt-40 mr-40 h-auto flex justify-between items-center">
      <h1 className="text-xl font-roboto font-medium text-black-neutral ">
        Funcionários
      </h1>
      <div className="relative">
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6">
          <img src={SearchIcon} alt="SearchIcon"/>
        </div>
        {/* <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6 text-gray-20"/> */}
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-[290px]  py-3 leading-5 pr-10 pl-16 placeholder:text-gray-20 placeholder:text-base placeholder:font-normal border border-gray-10 rounded-lg focus:outline-none"
        />
      </div>
    </div>
  );
}
