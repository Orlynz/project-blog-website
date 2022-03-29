// import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home />
    </div>
  );
}

export default App;
