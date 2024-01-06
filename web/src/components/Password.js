import { useState } from "react";
import styles from "../styles/components/Password.module.css";
import PasswordModal from "../components/Password_Modal";

const Password = (props) => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const modalHandle = () => {
    setisModalOpen((prev) => !prev);
  };
  return (
    <>
      {isModalOpen && <PasswordModal modalHandle={modalHandle} closeOnOutsideClick={true} data={props.data} />}
      <div className={styles.Password} onClick={modalHandle}>
        <h2>{props.data.name}</h2>
        <div className={styles.overlay}>
          <p>{props.data.email}</p>
        </div>
      </div>
    </>
  );
};

export default Password;
