import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import CardDetails from "./Components/CardDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
