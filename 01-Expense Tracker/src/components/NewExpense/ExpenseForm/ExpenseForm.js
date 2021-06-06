import { useState, useContext } from "react";
import InputField from "./InputField/InputField";
import AuthContext from "../../../context/auth-context";
import classes from "./ExpenseForm.module.css";

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnteredAmount] = useState("");
  // const [enteredDate, setEnteredDate] = useState("");
  // const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  // const amountChangeHandler = (event) => setEnteredAmount(event.target.value);
  // const dateChangeHandler = (event) => setEnteredDate(event.target.value);

  const authContext = useContext(AuthContext);
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const today = new Date().toISOString().split("T")[0];

  const userInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prevValue) => {
      prevValue[name] = value;
      return { ...prevValue };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authContext.onSaveExpenseData(userInput);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <form>
      <div className={classes.new_expense__controls}>
        <InputField
          label="Title"
          name="enteredTitle"
          type="text"
          value={userInput.enteredTitle}
          onChange={userInputChangeHandler}
        />
        <InputField
          label="Amount"
          name="enteredAmount"
          type="number"
          min={1}
          step={1}
          value={userInput.enteredAmount}
          onChange={userInputChangeHandler}
        />
        <InputField
          label="Date"
          name="enteredDate"
          type="date"
          min="2021-01-01"
          max={today}
          value={userInput.enteredDate}
          onChange={userInputChangeHandler}
        />
      </div>
      <div className={classes.new_expense__actions}>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
