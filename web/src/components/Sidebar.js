import styles from "../styles/components/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <header className={styles.header}>
        <h2>Pass Guardian</h2>
      </header>
      <center>
        <button className={styles.addLogin}>Add Password</button>
      </center>
    </div>
  );
};

export default Sidebar;
