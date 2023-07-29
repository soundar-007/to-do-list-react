import { useState } from "react";
import Button from "./Button";
import { AddModal } from "./AddModal";
import DeleteIcon from "@mui/icons-material/Delete";

export default function App() {
  const [selected, setSelected] = useState("all");
  const [addTask, setAddTask] = useState(false);
  const [inputTask, setInputTask] = useState("");
  const [allTask, setAllTask] = useState("");

  const DeleteTask = (id) => {
    setAllTask(allTask.filter((el, index) => el.id !== id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTask) return;
    const freshTask = {
      name: inputTask,
      checked: false,
      id: Date.now(),
    };
    setAllTask([...allTask, freshTask]);
    setAddTask(false);
    setInputTask("");
  };

  const handleForTick = (id) => {
    setAllTask(
      allTask.map((el, i) =>
        el.id === id ? { ...el, checked: !el.checked } : el
      )
    );
  };
  let sortedItems;
  if (selected === "all") sortedItems = allTask;
  if (selected === "Incomplete")
    sortedItems =
      allTask.length > 0 ? allTask.filter((el) => el.checked === false) : "";
  if (selected === "Completed")
    sortedItems =
      allTask.length > 0 ? allTask.filter((el) => el.checked === true) : "";
  return (
    <div className="root-app">
      <div className="container">
        <h1>TODO LIST</h1>

        <div className="task-option">
          <Button addTask={addTask} onClick={() => setAddTask(!addTask)}>
            Add Task
          </Button>
          <select
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Incomplete">InComplete</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="content">
          {sortedItems?.length === 0 ? (
            <div className="No-Todos">No Todos</div>
          ) : (
            <ul className="task-list">
              {sortedItems &&
                sortedItems.map((el, i) => (
                  <div key={el.id} className="list">
                    <div className="check-box">
                      <input
                        className="check"
                        onChange={() => handleForTick(el.id)}
                        type="checkbox"
                      />
                      <span
                        style={
                          el.checked
                            ? { textDecoration: "line-through", color: "gray" }
                            : {}
                        }
                        className="list-name"
                      >
                        {el.name}
                      </span>
                    </div>

                    <div className="edit-delete">
                      <button onClick={() => DeleteTask(el.id)}>
                        <DeleteIcon />
                      </button>
                    </div>
                  </div>
                ))}
            </ul>
          )}
        </div>
        {addTask && (
          <AddModal
            setInputTask={setInputTask}
            values={inputTask}
            handleSubmit={handleSubmit}
            addTask={addTask}
            handleChange={(e) => setInputTask(e.target.value)}
            onClick={() => setAddTask(!addTask)}
          >
            Add Todo
          </AddModal>
        )}
      </div>
    </div>
  );
}
