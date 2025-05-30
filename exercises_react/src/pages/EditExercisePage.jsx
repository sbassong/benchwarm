import EditForm from "../components/EditForm";

function EditExercisePage({ exerciseToEdit }) {
  return (
    <div className="page-container">
      <h2>Edit exercise</h2>
      <EditForm exerciseToEdit={exerciseToEdit} />
    </div>
  );
}

export default EditExercisePage;
