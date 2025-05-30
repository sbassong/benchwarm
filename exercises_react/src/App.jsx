import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateExercisePage from "./pages/CreateExercisePage";
import EditExercisePage from "./pages/EditExercisePage";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/create" element={<CreateExercisePage />}></Route>
            <Route path="/:id/edit" element={<EditExercisePage />}></Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
