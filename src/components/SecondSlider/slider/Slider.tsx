import styles from "./Slider.module.scss";
import { useMediaQuery } from "@react-hook/media-query";
import { useState } from "react";
import Line from "../../../ui/Line/Line";

const slides = [
  {
    firstImg: "../../../img/thirdSlider/4.png",
    secondImg: "../../../img/thirdSlider/3.png",
  },
  {
    firstImg: "../../../img/secondSlider/Frame19194.png",
    secondImg: "../../../img/secondSlider/Frame19195.png",
  },
  {
    firstImg: "../../../img/secondSlider/Frame19194.png",
    secondImg: "../../../img/secondSlider/Frame19195.png",
  },
];

const slidesMobile = [
  {
    firstImg: "../../../img/thirdSlider/4.png",
    secondImg: "../../../img/thirdSlider/3.png",
  },
  {
    firstImg: "../../../img/secondSlider/Frame19194.png",
    secondImg: "../../../img/secondSlider/Frame19195.png",
  },
  {
    firstImg: "../../../img/secondSlider/Frame19194.png",
    secondImg: "../../../img/secondSlider/Frame19195.png",
  },
];

const desc = [
  {
    title: "R&R Group website & Logo",
    subtitle: `We start by getting to know our clients, their business goals, and their target audience. 
   <br /> This involves conducting research, analyzing data, 
    and discussing ideas with our clients to gain a <br /> deep understanding of their needs.`,
  },
  {
    title: "R&R Group website & Logo",
    subtitle: `We start by getting to know our clients, their business goals, and their target audience. 
   <br /> This involves conducting research, analyzing data, 
    and discussing ideas with our clients to gain a <br /> deep understanding of their needs.`,
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    subtitle: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Aut velit ad quisquam qui nostrum optio quidem laboriosam similique ab ipsa`,
  },
];

const Slider = () => {
  const Desktop = useMediaQuery("(min-width: 1920px)");
  const Tablet = useMediaQuery("(min-width: 1023px) and (max-width: 1919px)");
  const Mobile = useMediaQuery("(max-width: 1023px)");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [descIndex, setDescIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setDescIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setDescIndex(newIndex);
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
          {Desktop ? (
            <button className={styles.btn} onClick={prevSlide}>
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
          ) : null}
          {getSlidesForDisplay().map((slide, index) => {
            if (index === currentIndex) {
              return (
                <div
                  key={index}
                  className={`${styles.slide} ${
                    index === 1 ? styles.active : ""
                  }`}
                >
                  <img src={slide?.firstImg} alt="" />
                  <img src={slide?.secondImg} alt="" />
                </div>
              );
            } else {
              return null;
            }
          })}

          {Desktop ? (
            <button className={styles.btn} onClick={nextSlide}>
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
          ) : null}
        </div>
        {Mobile ? (
          <div className={styles.btnWrap}>
            <button className={styles.btn} onClick={prevSlide}>
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
            <button className={styles.btn} onClick={nextSlide}>
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
        ) : null}
        <div className={styles.descWrap}>
          <div className={styles.tagsWrap}>
            <button className={styles.tag}>UX Research</button>
            <button className={styles.tag}>Wireframe</button>
            <button className={styles.tag}>Visual Design</button>
          </div>

          <p className={styles.descTitle}>{desc[descIndex].title}</p>
          <p
            className={styles.descSubtitle}
            dangerouslySetInnerHTML={{ __html: desc[descIndex].subtitle }}
          ></p>
          {Tablet ? (
            <div className={styles.btnWrap}>
              <button className={styles.btn} onClick={prevSlide}>
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
              <button className={styles.btn} onClick={nextSlide}>
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
          ) : null}
          <Line mb="100px" />
        </div>
      </div>
    </>
  );
};

export default Slider;
