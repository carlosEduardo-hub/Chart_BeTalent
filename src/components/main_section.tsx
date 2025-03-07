import { SearchSection } from "./search_section";
import { TableHeader } from "./table_header";

export function MainSection() {
 return (
   <div className="max-w-6xl mx-auto h-auto flex flex-col justify-center space-y-32">
    <SearchSection />
    <TableHeader />
   </div>
 );
}