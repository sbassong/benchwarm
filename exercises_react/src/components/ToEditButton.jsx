import { MdEdit } from "react-icons/md";

function ToEditButton({goEditExercise, exerciseData}) {
  return (
    <div className="toEdit-button-cell">
      <MdEdit
        className="toEdit-exercise-button"
        role="button"
        onClick={() => goEditExercise(exerciseData)}
      />
    </div>
  );
}

export default ToEditButton;
