import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import Password from "../components/Password";
import Password from "../components/Password";
import styles from "../styles/pages/Home.module.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [passwordList, setPassworList] = useState([]);

  useEffect(() => {
    if (!token) {
      return navigate("/auth/login");
    }

    const getPasswords = () => {
      axios
        .get("http://localhost:8080/home/passwords", {
          headers: { Authorization: token },
        })
        .then((result) => {
          if (result.data !== null) {
            setPassworList(result.data);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) {
            navigate("/auth/login");
          } else {
            toast(error.response.error);
          }
        });
    };

    getPasswords();
  }, []);

  
  return (
    <div className={styles.Home}>
      <ToastContainer position="top-center" theme="dark" />
      <Sidebar />
      <div className={styles.content}>
        <h1>Passwords</h1>
        <div className={styles.passwordGrid}>
          {passwordList.length === 0 && <p>No Passwords</p>}
          {passwordList.map((password) => {
            return <Password data={password} />;
          })}
          {/* <Password onClick={modalHandle} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
