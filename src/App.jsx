import { Banner } from "./components/Banner";
import { Destaques } from "./components/Destaques";
import { Header } from "./components/Header";

export function App() {
  return (
    <div className="bg-gray-50">
      <Header/>
      <Banner/>
      <Destaques/>
    </div>
  ) 
}
