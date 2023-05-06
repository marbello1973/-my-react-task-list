import Home from "./views/Home/Home";
import TaskList from "./views/TaskList/TaskList";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.containerApp}>
        <div>
          <Home />
        </div>
        <div>
          <TaskList />
        </div>
      </div>
    </>
  );
}

export default App;
