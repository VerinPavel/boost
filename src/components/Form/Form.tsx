import { useState } from "react";
import TouchButton from "../../ui/GetInTouchBtn/TouchButton";
import styles from "./Form.module.scss";
import { Option, Selector } from "../../ui/Selector/Selector";

interface FormProps {
  setIsOpenModal: (isOpen: boolean) => void;
}

export default function Form({ setIsOpenModal }: FormProps) {
  const [backgroundColor1, setBackgroundColor1] = useState("white");
  const [backgroundColor2, setBackgroundColor2] = useState("white");
  const [backgroundColor3, setBackgroundColor3] = useState("white");

  const handleClick1 = () => {
    setBackgroundColor1(backgroundColor1 === "white" ? "#ffb700" : "white");
  };

  const handleClick2 = () => {
    setBackgroundColor2(backgroundColor2 === "white" ? "#ffb700" : "white");
  };

  const handleClick3 = () => {
    setBackgroundColor3(backgroundColor3 === "white" ? "#ffb700" : "white");
  };

  const options: Option[] = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  const handleSelect = (selectedOption: any) => {
    console.log("Selected option:", selectedOption);
  };

  return (
    <div id="contacts" className={styles.formSection}>
      <p className={styles.title}>contact form</p>
      <div className={styles.form}>
        <div className={styles.row} style={{ gap: "25px" }}>
          <p>Hello! My name is </p>
          <input type="text" className={styles.underline} />
          <p>and I work as a</p>
          <input type="text" className={styles.underline} />
          <p>In</p>
          <input type="text" className={styles.underline} />
        </div>
        <div className={styles.row} style={{ gap: "54px" }}>
          <p>And I want to have more information about</p>
          <Selector options={options} onSelect={handleSelect} />
        </div>
        <div className={styles.row} style={{ gap: "40px" }}>
          <p>I would like some help in</p>
          <input
            type="text"
            className={styles.underline}
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.row} style={{ gap: "25px" }}>
          <p>I work in the follow sector</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              className={styles.togler}
              onClick={handleClick1}
              style={{ color: backgroundColor1, borderColor: backgroundColor1 }}
            >
              <div
                className={styles.circle}
                style={{ backgroundColor: backgroundColor1 }}
              ></div>
              Startup
            </button>
            <button
              type="button"
              className={styles.togler}
              onClick={handleClick2}
              style={{ color: backgroundColor2, borderColor: backgroundColor2 }}
            >
              <div
                className={styles.circle}
                style={{ backgroundColor: backgroundColor2 }}
              ></div>
              Sports
            </button>
            <button
              type="button"
              className={styles.togler}
              onClick={handleClick3}
              style={{ color: backgroundColor3, borderColor: backgroundColor3 }}
            >
              <div
                className={styles.circle}
                style={{ backgroundColor: backgroundColor3 }}
              ></div>
              Health
            </button>
          </div>
        </div>
        <div className={styles.row} style={{ gap: "24px" }}>
          <p>Contact me at</p>
          <input
            type="text"
            className={styles.underline}
            style={{ width: "100%" }}
          />
        </div>
        <div className={styles.btnWrap}>
          <TouchButton
            onClick={() => setIsOpenModal(true)}
            color="#414141"
            backcolor="#FFFFFF"
            text="Get in Touch"
            role="button"
          />
        </div>
      </div>
    </div>
  );
}
