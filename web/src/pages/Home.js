import { useEffect } from "react";
import { useNavigate } from "react-router";
// import Password from "../components/Password";
import Password from "../components/Password";
import styles from "../styles/pages/Home.module.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/auth/login");
    }
  });
  return (
    <div className={styles.Home}>
      <Sidebar />
      <div className={styles.content}>
        <h1>Passwords</h1>
        <div className={styles.passwordGrid}>
          <Password />
          <Password />
          <Password />
          <Password />
        </div>
      </div>
    </div>
  );
};

export default Home;
