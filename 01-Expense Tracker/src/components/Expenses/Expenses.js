import { useState } from "react";
import AuthContext from "../../context/auth-context";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  };
  const filterYearChangeHandler = (selectedExpensesFilterYear) => {
    console.log(selectedExpensesFilterYear);
    setFilteredYear(selectedExpensesFilterYear);
  };

  return (
    <>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeExpensesFilterYear={filterYearChangeHandler}
      />
      <AuthContext.Provider
        value={{ onSaveExpenseData: saveExpenseDataHandler }}
      >
        <NewExpense />
      </AuthContext.Provider>
      <ExpenseItems />
    </>
  );
};

export default Expenses;
