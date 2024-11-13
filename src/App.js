import { Link } from "react-router-dom";
import Button from "./components/Button";

function App() {
  return (
    <>
      <h1>Home</h1>
      <Button title={"Botão teste normal"} />
      <Button title={"Botão teste variant 2"} variant="secondary" />
    </>
  );
}

export default App;
