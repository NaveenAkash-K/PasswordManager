import { useEffect, useRef, useState } from "react";
import styles from "../styles/components/Modal.module.css";
import ReactDOM from "react-dom";
import { IoEyeOffOutline, IoEyeOutline, IoChevronDown } from "react-icons/io5";
import axios from "axios";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const backdropPortal = document.getElementById("backdrop");
const modalPortal = document.getElementById("modal");

const Modal = (props) => {
  const [passwordReveal, setPasswordReveal] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const token = localStorage.getItem("token");

  const [dropdownValue, setDropdownValue] = useState("Website");
  const nameRef = useRef();
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const urlRef = useRef();
  const noteRef = useRef();

  useEffect(() => {
    if (props.data) {
      nameRef.current.value = props.data.name ? props.data.name : "";
      emailRef.current.value = props.data.email ? props.data.email : "";
      passwordRef.current.value = props.data.password
        ? props.data.password
        : "";
      usernameRef.current.value = props.data.username
        ? props.data.username
        : "";
      urlRef.current.value = props.data.url ? props.data.url : "";
      noteRef.current.value = props.data.note ? props.data.note : "";
      if (props.data.type) {
        setDropdownValue(props.data.type);
      }
    }
  }, []);

  const passwordRevealHandle = () => {
    setPasswordReveal((prev) => {
      return !prev;
    });
  };

  const dropdownHandle = () => {
    setIsDropdownOpen((prev) => {
      return !prev;
    });
  };

  const addPassword = () => {
    console.log("add");
    console.log(nameRef.current.value);
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(urlRef.current.value);
    console.log(noteRef.current.value);
    console.log(dropdownValue);

    axios
      .post(
        "http://localhost:8080/home/passwords",
        {
          name: nameRef.current.value,
          username: usernameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          url: urlRef.current.value,
          note: noteRef.current.value,
          type: dropdownValue,
        },
        { headers: { Authorization: token } }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editPassword = () => {
    console.log("edit");
    console.log(nameRef.current.value);
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    console.log(urlRef.current.value);
    console.log(noteRef.current.value);
    console.log(dropdownValue);
  };

  return (
    <>
      {props.closeOnOutsideClick
        ? ReactDOM.createPortal(
            <Backdrop onClick={props.modalHandle} />,
            backdropPortal
          )
        : ReactDOM.createPortal(<Backdrop />, backdropPortal)}

      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>
          <input
            className={styles.modalName_input}
            placeholder="Name"
            ref={nameRef}
          />
          <input
            className={styles.modal_input}
            placeholder="Username"
            ref={usernameRef}
          />
          <input
            className={styles.modal_input}
            placeholder="Email"
            ref={emailRef}
          />
          <div className={styles.passwordInputDiv}>
            <input
              className={styles.modal_input}
              type={passwordReveal ? "text" : "password"}
              placeholder="Password"
              ref={passwordRef}
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
          <input
            className={styles.modal_input}
            placeholder="URL"
            ref={urlRef}
          />
          <input
            className={styles.modal_input}
            placeholder="Note"
            ref={noteRef}
          />
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
              onClick={props.modalHandle}
            >
              Close
            </button>

            <button
              className={styles.modal_button}
              style={{ backgroundColor: "rgba(86, 106, 255, 0.388)" }}
              onClick={props.data ? editPassword : addPassword}
            >
              Save
            </button>
          </div>
        </ModalOverlay>,
        modalPortal
      )}
    </>
  );
};

export default Modal;
