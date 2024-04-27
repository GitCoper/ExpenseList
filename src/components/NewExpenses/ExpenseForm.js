import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Alternate in object:
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  // Alternative: creating a shared handler function
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "value") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  // Alternate in Object
  //   const titleChangeHandler = (event) => {
  //     setUserInput({
  //         ...UserInput,
  //         enteredTitle: event.target.value,
  //     })
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput({
  //         ...UserInput,
  //         enteredAmount: event.target.value,
  //     })
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput({
  //         ...UserInput,
  //         enteredDate: event.target.value,
  //     })
  //   };

  // If state depends on previous state should be like this:
  // const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //   return {...prevState, enteredTitle: event.target.value};
  // });
  //   };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* <input type="text" onChange={(event) =>inputChangeHandler('title', event.target.value)} /> */}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
