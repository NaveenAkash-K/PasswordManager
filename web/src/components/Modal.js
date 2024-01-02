import styles from "../styles/components/Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}/>;
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
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick}/>,
        backdropPortal
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClick}>{props.children}</ModalOverlay>,
        modalPortal
      )}
    </>
  );
};

export default Modal;
