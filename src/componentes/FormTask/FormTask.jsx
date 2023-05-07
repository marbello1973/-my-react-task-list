import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../features/task/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./FormTask.module.css";

function FormTask() {
  const [task, setTask] = useState({
    titulo: "",
    description: "",
  });
  const dispath = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const editTask = useSelector((state) => state.task);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispath(updateTask(task));
    } else {
      dispath(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/create");
  };

  useEffect(() => {
    if (params.id) {
      setTask(editTask.find((el) => el.id === params.id));
    }
  }, []);

  return (
    <div className={styles.container}>
      <form onSubmit={handelSubmit}>
        <h2>FormTask</h2>
        <input
          name="titulo"
          type="text"
          placeholder="titulo"
          onChange={handleChange}
          value={task.titulo}
        />
        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
        />
        <button>Guardar</button>
      </form>
    </div>
  );
}

export default FormTask;
