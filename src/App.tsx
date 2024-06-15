import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./components/Admin/Admin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
