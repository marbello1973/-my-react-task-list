import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h2>Lista De Tareas</h2>
      <div>
        <Input />
        <Button />
      </div>
    </div>
  );
}

export default Header;
