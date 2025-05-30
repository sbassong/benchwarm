import DeleteButton from "./DeleteButton";
import ToEditButton from "./ToEditButton";

function ExerciseRow({ exerciseData, goEditExercise }) {
  return (
    <tr>
      <td>{exerciseData.name}</td>
      <td>{exerciseData.reps}</td>
      <td>{exerciseData.weight}</td>
      <td>{exerciseData.unit}</td>
      <td>{exerciseData.date}</td>
      <div className="row-cta">
        <DeleteButton id={exerciseData._id} />
        <ToEditButton exerciseData={exerciseData} goEditExercise={goEditExercise} />
      </div>
    </tr>
  );
}

export default ExerciseRow;
