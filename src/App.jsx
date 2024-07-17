import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateProjectPage from "./pages/CreateProjectPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
