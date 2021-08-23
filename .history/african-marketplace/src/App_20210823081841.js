import "./App.css";
import HomePage from "./page/home";
import NavigationBar from "./component/navigation-bar";
import Page404 from "./component/404";
import Footer from "./component/footer";
import AboutPage from "./page/about";
import Product from "./page/product";
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
              <HomePage />
            </Route>
            <Route path="/product">
              <Product />{" "}
            </Route>
            <Route path="/profile"> </Route>
            <Route path="/About">
              <AboutPage />
            </Route>
            <Route path="/Contact"> </Route>

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
