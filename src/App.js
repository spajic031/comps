import SideBar from "./components/SideBar";
import AccordionPage from "./components/pages/AccordionPage";
import ButtonPage from "./components/pages/ButtonPage";
import DropdownPage from "./components/pages/DropdownPage";

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
