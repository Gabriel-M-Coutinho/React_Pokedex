import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useLocation } from "react-router-dom";

function Poke() {
  const location = useLocation();
  const { state } = location;

  return (
    <div>
      <h1>{state.species.name}</h1>

      <p>Type:</p>
      <p>
        ID:
        {state.id}
      </p>
    </div>
  );
}

export default Poke;
