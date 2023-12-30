import styles from "../styles/pages/Signup.module.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.login_card}>
        <h2>Manage all your password under in one place!</h2>
        <input placeholder="Username" className={styles.input} />
        <input placeholder="Email" className={styles.input} />
        <input placeholder="Master Password" className={styles.input} />
        <input placeholder="Confirm Master Password" className={styles.input} />
        <button className={styles.login_button}>Signup</button>

        <hr className={styles.hr} />

        <Link to={"/auth/login"} style={{ width: "100%" }}>
          <button className={styles.signup_button}>
            Already a user? Login!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
