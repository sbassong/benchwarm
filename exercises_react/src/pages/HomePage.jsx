import ExerciseTable from "../components/ExerciseTable";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  const handleGetExercises = async () => {
    const response = await fetch("/exercises");
    const exercisesData = await response.json();
    setExercises(exercisesData);
  };

  const goEditExercise = async (exerciseToEdit) => {
    setExerciseToEdit(exerciseToEdit);
    navigate(`/${exerciseToEdit._id}/edit`);
  };

  useEffect(() => {
    handleGetExercises();
  }, [exercises]);
  
  return (
    <div className="page-container home-page">
      <h2>Exercise log</h2>
      {!exercises.length ? (
        <div>
          <h3>
            No current exercises.{" "}
            <Link className="nav-link" to="/create">
              Start a new workout?
            </Link>
          </h3>
        </div>
      ) : (
        <ExerciseTable goEditExercise={goEditExercise} exercises={exercises} />
      )}
    </div>
  );
}

export default HomePage;
