import "./App.css";
import Home from "./component/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./component/404";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavigationBar />

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/"> </Route>
          <Route path="/"> </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
