import "./App.css";
import { Filters } from "./Filters";
import { ExpenseList } from "./ExpenseList";
import { PaymentForm } from "./PaymentForm";
import { useState } from "react";
function App() {
  const testData = [
    {
      name: "콜라",
      price: 3000,
      type: "food",
      date: "2022-01-02",
      isMemo: false,
      memo: "",
      isRepurchaseChecked: [true, false],
      repurchase: true,
    },
    {
      name: "아이폰",
      price: 1000000,
      type: "communication",
      date: "2020-03-02",
      isMemo: true,
      memo: "단단하다",
      isRepurchaseChecked: [false, true],
      repurchase: false,
    },
    {
      name: "리팩토링",
      price: 30000,
      type: "education",
      date: "2023-09-01",
      isMemo: true,
      memo: "언제보냐",
      isRepurchaseChecked: [false, true],
      repurchase: false,
    },
    {
      name: "교통카드",
      price: 40000,
      type: "transportation",
      date: "2023-08-01",
      isMemo: true,
      memo: "어디갔더라",
      isRepurchaseChecked: [true, false],
      repurchase: true,
    },
  ];
  const [expenseDataState, setExpenseDataState] = useState(
    JSON.parse(localStorage.getItem("expenseDataState")) || testData
  );

  localStorage.setItem("expenseDataState", JSON.stringify(expenseDataState));

  const addExpenseData = (stateObject) => {
    setExpenseDataState((prev) => [...prev, stateObject]);
  };
  // console.log("local", localStorage.getItem("expenseDataState"));
  // console.log(expenseDataState);

  const [filterStateObject, setFilterStateObject] = useState({
    type: "select",
    sort: "date-desc",
    startDate: new Date(),
    endDate: new Date(),
  });
  const filteredTypeExpenseData = expenseDataState.filter((obj) =>
    filterStateObject.type === "select"
      ? true
      : filterStateObject.type === obj.type
  );
  const sortedExpenseData = filteredTypeExpenseData.sort((a, b) => {
    if (filterStateObject.sort === "date-desc") {
      return new Date(b.date) - new Date(a.date);
    } else if (filterStateObject.sort === "date-asc") {
      return new Date(a.date) - new Date(b.date);
    } else if (filterStateObject.sort === "price-desc") {
      return b.price - a.price;
    } else if (filterStateObject.sort === "price-asc") {
      return a.price - b.price;
    }
  });
  const filteredStartDateExpenseData = sortedExpenseData.filter((obj) => {
    if (filterStateObject.startDate instanceof Date) {
      return true;
    } else {
      return new Date(filterStateObject.startDate) <= new Date(obj.date);
    }
  });
  const filteredEndDateExpenseData = filteredStartDateExpenseData.filter(
    (obj) => {
      if (filterStateObject.endDate instanceof Date) {
        return true;
      } else {
        return new Date(filterStateObject.endDate) >= new Date(obj.date);
      }
    }
  );
  return (
    <div className="App">
      Expense Tracker
      <Filters
        filterStateObject={filterStateObject}
        setFilterStateObject={setFilterStateObject}
      />
      {filteredEndDateExpenseData.map((stateObject) => (
        <ExpenseList stateObject={stateObject} key={Math.random() * 1000000} />
      ))}
      <PaymentForm addExpenseData={addExpenseData} />
    </div>
  );
}

export default App;
