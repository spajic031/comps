import AccordionPage from "./components/pages/AccordionPage";
import ButtonPage from "./components/pages/ButtonPage";
function App() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <ButtonPage />
      </div>
      <div className="w-1/2">
        <AccordionPage />
      </div>
    </div>
  );
}

export default App;
