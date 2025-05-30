import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ToEditButton({ id }) {
  const navigate = useNavigate()

  return (
    <td className="toEdit-button-container-cell">
      <div className="toEdit-button-cell">
        <MdEdit
          className="toEdit-exercise-button"
          onClick={() => navigate(`/${id}/edit`)}
          role="button"
        />
      </div>
    </td>
  );
}

export default ToEditButton;
