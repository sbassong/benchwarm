import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import CreateExercisePage from "./pages/CreateExercisePage";
import EditExercisePage from "./pages/EditExercisePage";
import { useState } from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="app">
      <Router>
        <header>
          <Navigation />
        </header>
        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={<HomePage setExerciseToEdit={setExerciseToEdit} />}
            ></Route>
            <Route path="/create" element={<CreateExercisePage />}></Route>
            <Route
              path="/:id/edit"
              element={<EditExercisePage exerciseToEdit={exerciseToEdit} />}
            ></Route>
          </Routes>
        </main>
        <footer>
          <p>© 2025 Samuel Bassong Bassong</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
