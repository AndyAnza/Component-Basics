import "./Components.css";
import Card from "../UI/Card";

const Components = (props) => {
  return (
    <Card>
      <ul id="concepts">
        <li className="concept">
          <img src={props.image} alt={props.title} />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
      </ul>
    </Card>
  );
};
export default Components;
