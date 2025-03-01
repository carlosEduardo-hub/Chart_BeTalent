import { Header } from "./components/header";
import { MainSection } from "./components/main_section";

export default function App() {
  return (
    <>
      <div className="h-screen min-w-[1024px]">
        <Header />
        <MainSection />
      </div>
    </>
  );
}
