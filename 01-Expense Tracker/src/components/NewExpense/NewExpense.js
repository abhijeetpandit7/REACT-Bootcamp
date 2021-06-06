import ExpenseForm from "./ExpenseForm/ExpenseForm";
import classes from "./NewExpense.module.css";

const NewExpense = () => {
  return (
    <div className={classes.new_expense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
