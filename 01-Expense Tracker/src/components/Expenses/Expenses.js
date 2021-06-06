import AuthContext from "../../context/auth-context";
import ExpenseItems from "../ExpenseItems/ExpenseItems";
import NewExpense from "../NewExpense/NewExpense";

const Expenses = () => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData);
  };

  return (
    <>
      <AuthContext.Provider value={{ onSaveExpenseData: saveExpenseDataHandler }}>
        <NewExpense />
      </AuthContext.Provider>
      <ExpenseItems />
    </>
  );
};
export default Expenses;
