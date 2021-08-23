import "./App.css";
import Home from "./component/home";
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
      <main></main>
      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
