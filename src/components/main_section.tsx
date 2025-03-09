import { SearchSection } from "./search_section";
import { TableHeader } from "./table_header";
import { TableRow } from "./table_row";

export function MainSection() {
  return (
    <div className="max-w-6xl mx-auto h-auto flex flex-col justify-center">
      <div className="space-y-32">
        <SearchSection />
        <TableHeader />
      </div>
      <TableRow />
      <TableRow />
    </div>
  );
}
