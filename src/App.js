import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Property from "./components/property";
import About from "./components/About";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <div className="sec1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<Property />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
