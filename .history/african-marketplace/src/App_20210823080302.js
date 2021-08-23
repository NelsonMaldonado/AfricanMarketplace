import "./App.css";
import Home from "./component/home";
import NavigationBar from "./component/navigation-bar";
import { BrowserRouter, Route, SWitch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
        <switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
