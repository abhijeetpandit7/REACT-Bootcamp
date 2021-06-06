import classes from "./InputField.module.css";

const InputField = (props) => (
  <div className={classes.new_expense__control}>
    <label>{props.label}</label>
    <input
      name={props.name}
      type={props.type}
      value={props.value}
      min={props.min}
      max={props.max}
      step={props.step}
      onChange={props.onChange}
    />
  </div>
);

export default InputField;
