import { Header } from "./components/header";
import { MainSection } from "./components/main_section";

export default function App() {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <MainSection />
      </div>
    </>
  );
}
