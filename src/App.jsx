import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage";
import AboutPage from "./components/Pages/AboutPage";
import ShaderPage from "./components/Pages/ShaderPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <main className="m-5 rounded-lg">
          <Navbar />
        </main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shader" element={<ShaderPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
