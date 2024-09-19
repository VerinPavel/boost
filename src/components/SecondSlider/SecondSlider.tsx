import { useMediaQuery } from "@react-hook/media-query";
import styles from "./SecondSlider.module.scss";
import Slider from "./slider/Slider";

export default function SecondSlider() {
  const Mobile = useMediaQuery("(max-width: 1023px)");
  return (
    <section id="cases" className={styles.secondSlider}>
      <div className={styles.top}>
        {Mobile ? (
          <p className={styles.title}>Our Works</p>
        ) : (
          <p className={styles.title}>
            our best work of <br /> successful projects
          </p>
        )}
        <button className={styles.btn}>
          <div>
            <p>See More</p>
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
      </div>

      <Slider />
    </section>
  );
}
