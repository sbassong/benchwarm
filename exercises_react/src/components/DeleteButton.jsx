import { MdOutlineDelete } from "react-icons/md";

function DeleteButton({ id, setExercises }) {
  const handleDeleteExercise = async () => {
    const response = await fetch(`/exercises/${id}`, { method: "DELETE" });
    if (response.status === 204) {
      // Filter out deleted through prev exercises state to reduces prop drilling
      setExercises((prev) => prev.filter((exercise) => exercise._id !== id));
      alert(`Successfully deleted exercise with id: ${id}`);
    } else {
      alert(
        `Failed to delete exercise with id: ${id}, status code: ${response.status}`
      );
    }
  };

  return (
    <div className="delete-button-cell">
      <MdOutlineDelete
        className="delete-exercise-button"
        onClick={handleDeleteExercise}
        role="button"
      />
    </div>
  );
}

export default DeleteButton;
