import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import Password from "../components/Password";
import Password from "../components/Password";
import styles from "../styles/pages/Home.module.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Modal from "../components/Modal";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/auth/login");
    }
  });

  const [passwordModal, setPasswordModal] = useState(false);

  const handlePasswordModal = () => {
    setPasswordModal(!passwordModal);
  };
  return (
    <div className={styles.Home}>
      {passwordModal && (
        <Modal onClick={handlePasswordModal}>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
          <input></input>
        </Modal>
      )}

      <Sidebar />
      <div className={styles.content}>
        <h1>Passwords</h1>
        <div className={styles.passwordGrid}>
          <Password onClick={handlePasswordModal} />
          <Password />
          <Password />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default Home;
