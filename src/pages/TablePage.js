import React from "react";
import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-300", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Banana", color: "bg-yellow-300", score: 1 },
    { name: "lime", color: "bg-green-300", score: 4 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
