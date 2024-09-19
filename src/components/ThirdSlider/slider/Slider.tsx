import styles from "./Slider.module.scss";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";

const slides = [
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/3.png",
  "../../../img/thirdSlider/1.png",
];

const slidesMobile = [
  "../../../img/thirdSlider/4.png",
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/3.png",
];

const Slider = () => {
  const Desktop = useMediaQuery("(min-width: 1920px)");
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const getSlidesForDisplay = () => {
    const prevIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

    return Desktop
      ? [slides[prevIndex], slides[currentIndex], slides[nextIndex]]
      : [
          slidesMobile[prevIndex],
          slidesMobile[currentIndex],
          slidesMobile[nextIndex],
        ];
  };

  return (
    <>
      <div className={styles.slider}>
        <div className={styles.sliderWrapper}>
          {getSlidesForDisplay().map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === 1 ? styles.active : ""}`}
            >
              <img src={slide} alt="" />
            </div>
          ))}
        </div>
        <div className={styles.controls}>
          <button onClick={prevSlide}>
            <svg
              className={styles.svg}
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM25 9L1 9V7L25 7V9Z"
                fill="#2A2A2A"
              />
            </svg>
          </button>
          <button onClick={nextSlide}>
            <svg
              className={styles.svg}
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9L24 9V7L0 7L0 9Z"
                fill="#2A2A2A"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
