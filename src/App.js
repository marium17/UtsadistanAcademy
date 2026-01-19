import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Teachers from "./Components/Teachers/Teachers";
import NavBar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

