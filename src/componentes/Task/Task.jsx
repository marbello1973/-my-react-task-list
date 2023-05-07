import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../features/task/taskSlice";
import { Link } from "react-router-dom";
import styles from "./Task.module.css";

function Task() {
  const tasks = useSelector((state) => state.task);
  const dispath = useDispatch();

  const handleDelete = (id) => {
    dispath(deleteTask(id));
  };

  return (
    <div className={styles.containerTask}>
      <header>
        <h2>Tarea{tasks.length}</h2>
        <Link to={"/"}>
          <h2>crear tarea</h2>
        </Link>
      </header>
      {tasks.map((el) => (
        <div key={el.id}>
          <h3>{el.titulo}</h3>
          <p>{el.description}</p>
          <button onClick={() => handleDelete(el.id)}>eliminar</button>
          <Link to={`/edit/${el.id}`}>
            <button>edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Task;
