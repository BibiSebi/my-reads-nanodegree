import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ShelvesPage from "./pages/ShelvesPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/search" element={<SearchPage />} />

        <Route path="/" element={<ShelvesPage />} />
      </Routes>

      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
