import { Header } from "./components/header";
import { MainSection } from "./components/main_section";

export default function App() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Header />
        <MainSection />
      </div>
    </>
  );
}
