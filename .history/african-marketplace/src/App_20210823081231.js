import "./App.css";
import Home from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./component/404";
import Footer from "./component/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/product"> </Route>
            <Route path="/profile"> </Route>
            <Route path="/About"> </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
