import TaskList from "./views/TaskList/TaskList";
import styles from "./App.module.css";
import Header from "./componentes/Header/Header";

function App() {
  return (
    <div className={styles.containerApp}>
      <div>
        <Header />
      </div>
      <div>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
