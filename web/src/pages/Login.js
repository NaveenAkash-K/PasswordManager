import styles from "../styles/pages/Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.login_card}>
        <h2>Welcome!</h2>
        <input placeholder="Email" className={styles.input} />
        <input placeholder="Master Password" className={styles.input} />
        <button className={styles.login_button}>Login</button>
        <hr className={styles.hr} />
        <Link to={"/auth/signup"} style={{width:"100%"}}>
          <button className={styles.signup_button}>New user? Sign Up!</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
