import Button from "./Button";
import ClearIcon from "@mui/icons-material/Clear";

export function AddModal({
  handleSubmit,
  children,
  onClick,
  values,
  handleChange,
}) {
  return (
    <div className="modal">
      <div className="close-btn">
        <Button onClick={onClick} text="gray" backGroundColr="white">
          <ClearIcon />
        </Button>
      </div>
      <div className="modal-form">
        <h3>{children}</h3>
        <form onSubmit={handleSubmit}>
          <p>Title</p>
          <input value={values} onChange={handleChange} />
          <p>Status</p>
          <select>
            <option>Incomplete</option>
            <option>Completed</option>
          </select>
          <div className="form-btns">
            <Button>{children}</Button>
            <Button backGroundColr="#b1b1b1">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
