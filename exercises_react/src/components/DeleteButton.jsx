import { MdOutlineDelete } from "react-icons/md";
import { useState } from "react";

function DeleteButton({ id, setExercises }) {
  const handleDeleteExercise = async () => {
    // await delete api call with id as param
    // check expected response
    // filter prev value of setExercises to rerender table
  };

  return (
    <td className="delete-button-container-cell">
      <div className="delete-button-cell">
        <MdOutlineDelete
          className="delete-exercise-button"
          onClick={handleDeleteExercise}
          role="button"
        />
      </div>
    </td>
  );
}

export default DeleteButton;
