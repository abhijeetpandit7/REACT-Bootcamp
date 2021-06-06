import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const day = props.date.toLocaleString("en-IN", { month: "long" });
  const month = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes.expense_date}>
      <div className={classes.expense_date__day}>{day}</div>
      <div className={classes.expense_date__year}>{year}</div>
      <div className={classes.expense_date__month}>{month}</div>
    </div>
  );
};

export default ExpenseDate;
