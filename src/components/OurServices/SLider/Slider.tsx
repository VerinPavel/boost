import { useEffect, useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider({ array }: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  //   const handleNextSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === array.length - 1 ? 0 : prevSlide + 1
  //     );
  //   };

  //   const handlePrevSlide = () => {
  //     setCurrentSlide((prevSlide) =>
  //       prevSlide === 0 ? array.length - 1 : prevSlide - 1
  //     );
  //   };

  console.log(isTransitioning);
  const handleTouchStart = (e: any) => {
    if (e.touches && e.touches.length > 0) {
      setStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: any) => {
    if (e.touches && e.touches.length > 0) {
      const diff = startX - e.touches[0].clientX;
      if (diff > 50) {
        setCurrentSlide((prevSlide) =>
          prevSlide === array.length - 1 ? 0 : prevSlide + 1
        ); // Переключение на следующий слайд при свайпе влево
        setStartX(e.touches[0].clientX); // Обновляем стартовую точку
      } else if (diff < -50) {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? array.length - 1 : prevSlide - 1
        ); // Переключение на предыдущий слайд при свайпе вправо
        setStartX(e.touches[0].clientX); // Обновляем стартовую точку
      }
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  console.log(handleTransitionEnd);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) =>
        prevSlide === array.length - 1 ? 0 : prevSlide + 1
      );
    }, 2000); // изменение слайда каждые 3 секунды

    return () => clearInterval(interval);
  }, [array.length]);
  return (
    <>
      <div
        className={styles.slider}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onMouseDown={handleTouchStart}
        onMouseMove={handleTouchMove}
      >
        {array.map((slider: any, index: number) => (
          <div
            key={slider.id}
            className={index === currentSlide ? styles.active : styles.inactive}
          >
            <img src={slider.firstImg} alt="" />
            <div className={styles.smallimg}>
              {slider.secondImg && <img src={slider.secondImg} alt="" />}
              {slider.thirdImg && <img src={slider.thirdImg} alt="" />}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
