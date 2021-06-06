import classes from "./Card.module.css";

const Card = (props) => {
  const allClasses = [classes.card];
  allClasses.push(props.className);

  return <div className={allClasses.join(' ')}>{props.children}</div>;
};

export default Card;
