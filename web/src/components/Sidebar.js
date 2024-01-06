import styles from "../styles/components/Sidebar.module.css";
import PasswordModal from "./Password_Modal";
import { useState } from "react";

const Sidebar = (props) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const modalHandle = () => {
    setisModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.Sidebar}>
      {isModalOpen && (
        <PasswordModal
          modalHandle={modalHandle}
          closeOnOutsideClick={true}
          addPassword={props.addPassword}
        />
      )}
      <header className={styles.header}>
        <h2>Pass Guardian</h2>
      </header>
      <center>
        <button className={styles.addLogin} onClick={modalHandle}>
          Add Password
        </button>
      </center>
    </div>
  );
};

export default Sidebar;
