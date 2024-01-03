import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import Password from "../components/Password";
import Password from "../components/Password";
import styles from "../styles/pages/Home.module.css";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import Modal from "../components/Modal";
import { IoEyeOffOutline, IoEyeOutline, IoChevronDown } from "react-icons/io5";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/auth/login");
    }
  });

  const [passwordModal, setPasswordModal] = useState(false);
  const [passwordReveal, setPasswordReveal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("Website");

  const passwordRevealHandle = () => {
    setPasswordReveal((prev) => {
      return !prev;
    });
  };

  const handlePasswordModal = () => {
    setPasswordModal((prev) => {
      return !prev;
    });
  };

  const dropdownHandle = () => {
    setIsDropdownOpen((prev) => {
      return !prev;
    });
  };

  return (
    <div className={styles.Home}>
      {passwordModal && (
        <Modal onClick={handlePasswordModal} closeOnOutsideClick={true}>
          <input className={styles.modalName_input} placeholder="Name" />
          <input className={styles.modal_input} placeholder="Username" />
          <input className={styles.modal_input} placeholder="Email" />
          <div className={styles.passwordInputDiv}>
            <input
              className={styles.modal_input}
              type={passwordReveal ? "text" : "password"}
              placeholder="Password"
            />
            {passwordReveal ? (
              <IoEyeOffOutline
                className={styles.eyeIcon}
                onClick={passwordRevealHandle}
              />
            ) : (
              <IoEyeOutline
                className={styles.eyeIcon}
                onClick={passwordRevealHandle}
              />
            )}
          </div>
          <input className={styles.modal_input} placeholder="URL" />
          <textarea className={styles.modal_input} placeholder="Note"/>
          <div className={styles.modalLastRow}>
            <div className={styles.dropdown} onClick={dropdownHandle}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "rgb(255, 255, 255,0.6)",
                }}
              >
                {dropdownValue}
                <IoChevronDown />
              </div>
              {isDropdownOpen && (
                <div className={styles.dropdownContent}>
                  <p
                    className={styles.dropdownValue}
                    onClick={(e) => {
                      setDropdownValue(e.currentTarget.innerHTML);
                    }}
                  >
                    Website
                  </p>
                  <p
                    className={styles.dropdownValue}
                    onClick={(e) => {
                      setDropdownValue(e.currentTarget.innerHTML);
                    }}
                  >
                    App
                  </p>
                  <p
                    className={styles.dropdownValue}
                    onClick={(e) => {
                      setDropdownValue(e.currentTarget.innerHTML);
                    }}
                  >
                    Wifi
                  </p>
                  <p
                    className={styles.dropdownValue}
                    onClick={(e) => {
                      setDropdownValue(e.currentTarget.innerHTML);
                    }}
                  >
                    Others
                  </p>
                </div>
              )}
            </div>
            <button
              className={styles.modal_button}
              style={{ backgroundColor: "rgba(255, 87, 87, 0.359)" }}
              onClick={handlePasswordModal}
            >
              Close
            </button>
            <button
              className={styles.modal_button}
              style={{ backgroundColor: "rgba(86, 106, 255, 0.388)" }}
            >
              Save
            </button>
          </div>
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
