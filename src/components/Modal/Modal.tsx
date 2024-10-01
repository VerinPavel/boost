//@ts-nocheck
import { useEffect, useState, useRef } from "react";
import styles from "./Modal.module.scss";
import TouchButton from "../../ui/GetInTouchBtn/TouchButton";

interface ModalProps {
  isOpenModal: boolean;
  handleClose: () => void;
}
const data = [
  {
    id: 1,
    pls: "Name",
    img: "url(/name.svg)",
    label: "Name",
  },
  {
    id: 2,
    pls: "Email address",
    img: "url(/message.svg)",
    label: "Email",
  },
  {
    id: 3,
    pls: "Message",
    img: "url(/email.svg)",
    label: "Message",
  },
];

export default function Modal({ isOpenModal, handleClose }: ModalProps) {
  const inputRef = useRef();
  const [onIsActive, setOnIsActive] = useState(false);
  const handleClick = (id) => {
    setOnIsActive((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false,
    }));
  };

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
          {data?.map((item) => (
            <div key={item.id} className={styles.inputWrap}>
              <label htmlFor="">{item.label}</label>
              <input
                ref={inputRef}
                // className={`${onIsActive[item.id] ? styles.active : ""}`}
                key={item.id}
                onClick={() => handleClick(item.id)}
                style={{ backgroundImage: item.img }}
                type="text"
                placeholder={item.pls}
              />
            </div>
          ))}
        </div>
        <div className={styles.touchBtnWrap}>
          <TouchButton text="Send now" color="white" backcolor="#444444" />
        </div>
      </div>
    </div>
  );
}
