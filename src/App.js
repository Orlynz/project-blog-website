import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./home.css";
import PageDetail from "./pages/PageDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
            <Footer />
          </Route>
          <Route path="/about">
            <Navbar />
            <About />
            <Footer />
          </Route>
          <Route path="/contact">
            <Navbar />
            <Contact />
            <Footer />
          </Route>
          <Route path="/pageDetail">
            <Navbar />
            <PageDetail />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
