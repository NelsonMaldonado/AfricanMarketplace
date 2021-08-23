import "./App.css";
import Home from "./component/home";
import NavigationBar from "./component/navigation-bar";
import {BrowserRouter, Route,SWitch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <Home />
    </div>
  );
}

export default App;
