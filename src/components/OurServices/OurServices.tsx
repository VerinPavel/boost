import { useState } from "react";
import Line from "../../ui/Line/Line";
import { btns } from "./data";
import styles from "./OurServices.module.scss";
import Slider from "./SLider/Slider";
import { brandingImg, blogersImg } from "./data";

export default function OurServices() {
  const [activeBtn, setActiveBtn] = useState(1);

  const selectImgs = (id: any) => {
    if (id === 1) {
      return brandingImg;
    }
    if (id === 2) {
      return blogersImg;
    } else {
      return brandingImg;
    }
  };
  return (
    <section id="services" className={styles.services}>
      <Line mb="70px" />
      <div>
        <p className={styles.title}>Our Services</p>
        <div className={styles.wrap}>
          <div className={styles.firtsPart}>
            <p className={styles.subtitle}>
              Brand Boost offers a range of design services that are tailored to
              meet the unique needs of each client
            </p>
            <div className={styles.btnWrap}>
              {btns?.map((btn) => (
                <button
                  key={btn.id}
                  className={`${styles.btn} ${
                    btn.id === activeBtn ? styles.active : ""
                  }`}
                  onClick={() => setActiveBtn(btn.id)}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: "20px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                      }}
                    >
                      <p className={styles.number}>{btn.num}</p>
                      <p className={styles.desc}>{btn.text}</p>
                    </div>
                    <svg
                      className={styles.arrow}
                      width="21"
                      height="8"
                      viewBox="0 0 21 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z"
                        fill="#222222"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className={styles.sliderWraper}>
            <Slider array={selectImgs(activeBtn)} />
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
}
