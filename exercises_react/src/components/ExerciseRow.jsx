import DeleteButton from "./DeleteButton";
import ToEditButton from "./ToEditButton";

function ExerciseRow({ exerciseData, setExercises }) {
  return (
    <tr>
      <td>{exerciseData.name}</td>
      <td>{exerciseData.reps}</td>
      <td>{exerciseData.weight}</td>
      <td>{exerciseData.unit}</td>
      <td>{exerciseData.date}</td>
      <td>
        <DeleteButton id={exerciseData._id} setExercises={setExercises}/>
        <ToEditButton id={exerciseData._id}/>
      </td>
    </tr>
  );
}

export default ExerciseRow;
