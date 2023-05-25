import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.containerh1}>
        <h1>Lista de tareas</h1>
      </div>
    </div>
  );
}

export default Header;
