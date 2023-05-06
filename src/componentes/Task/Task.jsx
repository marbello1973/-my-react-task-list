import RadioButton from "../RadioButton/RadioButton";
import styles from "./Task.module.css";
function Task() {
  return (
    <>
      <div className={styles.containerTask}>
        <div className={styles.tarea}>
          <div>
            <RadioButton />
          </div>
          <div>
            <h2>tipo de tarea</h2>
          </div>
        </div>
        <div>
          <img src="./public/task48.svg" alt="write" />
          <img src="./public/delete48.svg" alt="write" />
        </div>
      </div>
    </>
  );
}

export default Task;
