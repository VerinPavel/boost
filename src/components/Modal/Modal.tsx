import { useEffect } from "react";
import styles from "./Modal.module.scss";
import TouchButton from "../../ui/GetInTouchBtn/TouchButton";

interface ModalProps {
  isOpenModal: boolean;
  handleClose: () => void;
}

export default function Modal({ isOpenModal, handleClose }: ModalProps) {
  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpenModal]);
  return (
    <div className={styles.modal}>
      <div className={styles.wrap}>
        <div className={styles.btnWrap}>
          <svg
            onClick={handleClose}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="#27272E"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9L1 1"
              stroke="#27272E"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className={styles.title}>Get in touch.</p>
        <p className={styles.subtitle}>Enter your detail below</p>
        <div className={styles.inputsWrap}>
          <div className={styles.inputWrap}>
            <label htmlFor="">Name</label>
            <input
              style={{ backgroundImage: "url(../../../public/name.svg)" }}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="">Email</label>
            <input
              style={{ backgroundImage: "url(../../../public/message.svg)" }}
              type="text"
              placeholder="Email address"
            />
          </div>
          <div className={styles.inputWrap}>
            <label htmlFor="">Message</label>
            <input
              style={{ backgroundImage: "url(../../../public/email.svg)" }}
              type="text"
              placeholder="Message"
            />
          </div>
        </div>
        <div className={styles.touchBtnWrap}>
          <TouchButton text="Send now" color="white" backcolor="#444444" />
        </div>
      </div>
    </div>
  );
}
