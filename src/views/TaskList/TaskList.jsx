import Task from "../../componentes/Task/Task";
import styles from "./TaskList.module.css";

function TaskList() {
  return (
    <>
      <div className={styles.container}>
        <Task />
      </div>
    </>
  );
}

export default TaskList;
