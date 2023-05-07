import FormTask from "../../componentes/FormTask/FormTask";
import Task from "../../componentes/Task/Task";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./TaskList.module.css";

function TaskList() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FormTask />} />
          <Route path="/CrearTarea" element={<Task />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default TaskList;
