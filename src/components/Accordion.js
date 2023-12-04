import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (i) => {
    {
      i === expandedIndex ? setExpandedIndex(-1) : setExpandedIndex(i);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // || ce prikazat prvi TRUE objekt
    // && ce prikazati prvi FALSE objekt ako ga ima, ako ne prikazat ce zadnji TRUE objekt
    /*  const content = isExpanded && <div>{item.content}</div>; */

    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex items-center justify-between border-b p-3 bg-gray-100 cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label} {icon}
        </div>
        {isExpanded && <div className="border-b p-5 ">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}
export default Accordion;
