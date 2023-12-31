import styles from "../styles/pages/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { isEmail, isPassword } from "../util/validators";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!isEmail(email)) {
      return toast("Invalid Email");
    }
    if (!isPassword(password)) {
      return toast(
        "Password must have atleast 1 Uppercase, 1 Lowercase, 1 Special Character and 1 Numeric digit"
      );
    }

    axios
      .post("http://localhost:8080/auth/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        localStorage.setItem("user", JSON.stringify(result.data.user));
        navigate("/");
      })
      .catch((error) => {
        toast(error.response.data.error);
      });
  };

  return (
    <div className={styles.Login}>
      <ToastContainer position="top-center" theme="dark" />
      <div className={styles.login_card}>
        <h2>Welcome!</h2>
        <input
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Master Password"
          className={styles.input}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className={styles.login_button} onClick={handleLogin}>
          Login
        </button>
        <hr className={styles.hr} />
        <Link to={"/auth/signup"} style={{ width: "100%" }}>
          <button className={styles.signup_button}>New user? Sign Up!</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
