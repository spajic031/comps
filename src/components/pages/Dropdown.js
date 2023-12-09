import { useState } from "react";
function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select...");

  const handleSelect = () => {};
  const handleOptionClick = (e) => {
    setIsOpen(false);
    setSelected(e.label);
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });
  return (
    <div>
      <div onClick={handleClick}>{selected}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}
export default Dropdown;
