import { Nav } from "react-bootstrap";
import "./App.css";
import Home from "./component/home";
import NavigationBar from "./component/navigation-bar";

function App() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>

      <Home />
    </div>
  );
}

export default App;
