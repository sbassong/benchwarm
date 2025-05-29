import { Link } from "react-router-dom";
import ExerciseTable from "../components/ExerciseTable";

function HomePage() {
  return (
    <div className="page-container hero-section">
      <h1>Exercises:</h1>
      <ExerciseTable />
    </div>
  );
}

export default HomePage;
