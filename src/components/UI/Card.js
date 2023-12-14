import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // Declaration of default class + any className added

  return <div className={classes}>{props.children}</div>; //children is all inside custom HTML element
}

export default Card;
