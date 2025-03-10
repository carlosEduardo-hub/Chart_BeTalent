import { Search } from "lucide-react"; 
// import SearchIcon from "../assets/icons/search.svg";

export function SearchSection({ onSearch }: { onSearch: (searchTerm: string) => void }) {
  return (
    <div className="mx-20 sm:mx-32 mt-40 h-auto flex flex-col justify-between gap-2.5 sm:flex-row sm:items-center">
      <h1 className="text-xl font-roboto font-medium text-black-neutral">
        Funcionários
      </h1>
      <div className="relative">
        {/* <div className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6">
          <img src={SearchIcon} alt="SearchIcon"/>
        </div> */}
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 size-6 text-gray-10"/>
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full sm:w-[335px] py-3 leading-5 pr-10 pl-16 text-gray-20 placeholder:text-gray-20 placeholder:text-base placeholder:font-normal border border-gray-10 rounded-lg focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
