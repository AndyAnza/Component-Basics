import "./Concepts.css";
import Card from "../UI/Card";
import Components from "./Components";
function Concepts(props) {
  return (
    <Card>
      <Components
        title={props.items[0].title}
        image={props.items[0].image}
        description={props.items[0].description}
      />
      <Components
        title={props.items[1].title}
        image={props.items[1].image}
        description={props.items[1].description}
      />
      <Components
        title={props.items[2].title}
        image={props.items[2].image}
        description={props.items[2].description}
      />
    </Card>
  );
}
export default Concepts;
