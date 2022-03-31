// import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import "./home.css";
import PageDetail from "./components/PageDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Header /> */}
      {/* <Home /> */}
      {/* <Home2 /> */}
      <PageDetail/>
    </div>
  );
}

export default App;
