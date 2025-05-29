import DeleteButton from "./DeleteButton";

function ExerciseRow({ exerciseData, setExercises }) {
  return (
    <tr>
      <td>{exerciseData.name}</td>
      <td>{exerciseData.reps}</td>
      <td>{exerciseData.weight}</td>
      <td>{exerciseData.unit}</td>
      <td>{exerciseData.date}</td>
      <DeleteButton id={exerciseData._id} setExercises={setExercises}/>
    </tr>
  );
}

export default ExerciseRow;
