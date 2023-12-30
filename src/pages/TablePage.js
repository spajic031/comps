import Table from "../components/Table";

const TablePage = () => {
  const data = [
    { name: "Orange", color: "bg-orange-400", score: 5 },
    { name: "Apple", color: "bg-red-400", score: 3 },
    { name: "Banana", color: "bg-yellow-400", score: 1 },
    { name: "Lime", color: "bg-green-300", score: 4 },
    { name: "Strowberrie", color: "bg-red-500", score: 2 },
    { name: "Plum", color: "bg-slate-600", score: 6 },
    { name: "Peach", color: "bg-amber-600", score: 6 },
  ];

  const config = [
    { label: "Name", render: (fruit) => fruit.name },
    {
      label: "Color",
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />,
    },
    {
      label: "Score",
      render: (fruit) => fruit.score,
      header: () => <th className="bg-red-500">Score</th>,
    },
  ];

  const keyFn = (fruit) => {
    return fruit.name;
  };

  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
