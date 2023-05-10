import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../../redux/reducer/taskSlice";
import { NavLink } from "react-router-dom";
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
        <h2 className={styles.tareas}>Numero De Tareas {tasks.length}</h2>
        <NavLink to={"/"} className={styles.navlink}>
          <h2 className={styles.crearTarea}>crear tarea</h2>
        </NavLink>
      </header>
      <div className={styles.containerTaskCard}>
        {tasks.map((el) => (
          <div key={el.id} className={styles.taskCard}>
            <h3>{el.titulo}</h3>
            <p>{el.description}</p>
            <button onClick={() => handleDelete(el.id)}>Eliminar</button>
            <NavLink to={`/edit/${el.id}`}>
              <button>Editar</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
