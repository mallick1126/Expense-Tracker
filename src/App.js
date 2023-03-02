import "./App.css";
import Expenses from "./Components/Expenses";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 240,
      date: new Date(2023, 2, 16),
    },
    {
      title: "House Maintainence",
      amount: 140,
      date: new Date(2023, 3, 23),
    },
    {
      title: "Electricity",
      amount: 40,
      date: new Date(2023, 1, 6),
    },
    {
      title: "Table",
      amount: 90,
      date: new Date(2023, 1, 20),
    },
  ];
  return (
    <div className="App">
      <h1>Expenses</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
