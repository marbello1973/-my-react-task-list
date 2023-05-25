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
      <div className={styles.numeroTarae}>
        <h2 className={styles.tareas}>Numero De Tareas {tasks.length}</h2>
      </div>
      <div className={styles.crearTarea}>
        <NavLink to={"/"} className={styles.navlink}>
          <h2 className={styles.crearTarea}>crear tarea</h2>
        </NavLink>
      </div>
      <div className={styles.containerCard}>
        <div className={styles.containerTaskCard}>
          <div className={styles.card}>
            {tasks.map((el) => (
              <div key={el.id} className={styles.taskCard}>
                <div className={styles.containerTitle}>
                  <h3>{el.titulo}</h3>
                  <p>{el.description}</p>
                </div>
                <div className={styles.buttons}>
                  <button
                    className={styles.buttonEliminar}
                    onClick={() => handleDelete(el.id)}
                  >
                    Eliminar
                  </button>
                  <NavLink to={`/edit/${el.id}`}>
                    <button className={styles.buttonEditar}>Editar</button>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
