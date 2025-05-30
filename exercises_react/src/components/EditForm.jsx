import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const handleGetExercise = async () => {
    const response = await fetch(`/exercises/${id}`);
    const exercisesData = await response.json();
    setName(exercisesData.name);
    setReps(exercisesData.reps);
    setWeight(exercisesData.weight);
    setUnit(exercisesData.unit);
    setDate(exercisesData.date);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/exercises/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        reps: parseInt(reps),
        weight: parseInt(weight),
        unit,
        date,
      }),
    });
    if (response.status === 200) {
      alert("Successfully updated the exercise!");
    } else {
      alert(`Failed to update the exercise, status code: ${response.status}`);
    }
    navigate("/");
  };

  useEffect(() => {
    handleGetExercise();
  }, []);

  return (
    <div className="form-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <fieldset className="form-fieldset">
          <legend className="form-legend">Update an exercise</legend>
          <label className="form-label">
            Name
            <input
              className="form-input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="form-label">
            Reps
            <input
              className="form-input"
              type="number"
              name="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              required
            />
          </label>
          <br />
          <label className="form-label">
            Weight
            <input
              className="form-input"
              type="number"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Weight unit
            <select
              className="form-input"
              name="unit"
              type="text"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              required
            >
              <option value="lbs">
                Lbs
              </option>
              <option value="kgs">
                Kgs
              </option>
            </select>
          </label>
          <br />
          <label className="form-label">
            Date
            <input
              className="form-input"
              type="text"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
        </fieldset>
        <button type="submit" className="form-button action-button">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditForm;
