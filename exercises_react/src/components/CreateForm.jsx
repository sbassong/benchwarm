import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const navigate = useNavigate()

  const [name, setName] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, reps: parseInt(reps), weight: parseInt(weight), unit, date }),
    });
    if (response.status === 201) {
      alert("Successfully added the exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    navigate("/");
  };

  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        <fieldset className="form-fieldset">
          <legend className="form-legend">Create a new exercise</legend>
          <label className="form-label">
            What's the exercise?
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
            Enter the number of reps
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
            Enter your weight
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
              onChange={(e) => setUnit(e.target.value)}
              type="text"
              required
            >
              <option value="lbs">Lbs</option>
              <option value="kgs">Kgs</option>
            </select>
          </label>
          <br />
          <label className="form-label">
            Today's date
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
          Work Out!
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
