import { MdOutlineDelete } from "react-icons/md";

function DeleteButton({ id, setExercises }) {
  const handleDeleteExercise = async () => {
    // await delete api call with id as param
    // check expected response
    // filter prev value of setExercises to rerender table
    const response = await fetch(`/exercises/${id}`, { method: "DELETE" });
    if (response.status === 204) {
      setExercises((prev) => prev.filter((exercise) => exercise._id !== id))
      alert(`Successfully deleted exercise with id: ${id}`);
    } else {
      alert(
        `Failed to delete exercise with id: ${id}, status code: ${response.status}`
      );
    }
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
