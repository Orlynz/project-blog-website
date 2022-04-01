// import './index.css';
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home2 from "./pages/Home2";
import "./home.css";
// import "./anu.css";
import PageDetail from "./components/PageDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Home2 />
      {/* <PageDetail/> */}
      <Footer />
    </div>
  );
}

export default App;
