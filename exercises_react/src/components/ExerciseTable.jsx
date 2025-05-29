import ExerciseRow from "./ExerciseRow";
import { useEffect, useState } from "react";

function ExerciseTable() {
  const [exercises, setExercises] = useState([])

  const handleGetExercises = async () => {
    // await api call response to get all exercises data
    // setExercises(response)
    const response = await fetch("/exercises");
    const exercisesData = await response.json();
    setExercises(exercisesData);
  }

  useEffect(() => {
    handleGetExercises()
  }, [exercises])

  return (
    <table className="exercise-table">
      <caption>All exercises:</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {exercises.length &&
          exercises.map((exercise) => <ExerciseRow key={exercise._id} exerciseData={exercise} setExercises={setExercises}/>)}
      </tbody>
    </table>
  );
}

export default ExerciseTable;
