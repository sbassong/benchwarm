import ExerciseRow from "./ExerciseRow";

function ExerciseTable({ exercises, goEditExercise }) {
  return (
    <table className="exercise-table">
      <caption>All exercises</caption>
      <thead>
        <tr>
          <th>Name</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Unit</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {exercises.length &&
          exercises.map((exercise) => (
            <ExerciseRow
              key={exercise._id}
              exerciseData={exercise}
              goEditExercise={goEditExercise}
            />
          ))}
      </tbody>
    </table>
  );
}

export default ExerciseTable;
