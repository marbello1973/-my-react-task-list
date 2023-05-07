import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import styles from "./FormTask.module.css";

function FormTask() {
  const [task, setTask] = useState({
    titulo: "",
    description: "",
  });
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispath(
      addTask({
        ...task,
        id: uuid(),
      })
    );
    navigate("/CrearTarea");
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handelSubmit}>
        <h2>FormTask</h2>
        <input
          name="titulo"
          type="text"
          placeholder="titulo"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default FormTask;
