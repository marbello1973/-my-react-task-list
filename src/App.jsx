import TaskList from "./views/TaskList/TaskList";
import styles from "./App.module.css";
import Header from "./componentes/Header/Header";

function App() {
  return (
    <div className={styles.containerApp}>
      <Header />
      <TaskList />
    </div>
  );
}

export default App;
