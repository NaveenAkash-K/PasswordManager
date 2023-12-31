import styles from "../styles/components/Password.module.css";

const Password = (props) => {
  return (
    <div className={styles.Password}>
      <h2>Gmail</h2>
      <div className={styles.overlay}>
        <p>naveen.akash0904@gmail.com</p>
      </div>
    </div>
  );
};

export default Password;
