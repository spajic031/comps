import SideBar from "./components/SideBar";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropdownPage from "./pages/DropdownPage";

function App() {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <div>
        <AccordionPage />
        <ButtonPage />
        <DropdownPage />
      </div>
    </div>
  );
}

export default App;
