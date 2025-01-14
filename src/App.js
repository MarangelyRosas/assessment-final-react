import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";
import "./App.css"

function App() {
  return (
    <div className="app">
      <Router>
        <header>
          <NavBar />
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
