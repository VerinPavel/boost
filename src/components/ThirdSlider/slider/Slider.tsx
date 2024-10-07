import styles from "./Slider.module.scss";
import { Controller, Navigation, FreeMode, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./Slider.css";
import { useMediaQuery } from "@react-hook/media-query";

const slides = [
  // "../../../img/thirdSlider/2.png",
  // "../../../img/thirdSlider/2.png",
  // "../../../img/thirdSlider/2.png",
  // "../../../img/thirdSlider/2.png",
  '/img/ourServices/branding/adsAstra/1.png',
  "../../../img/thirdSlider/2.png",
 '/img/ourServices/branding/notAlone/1.png',
 '/img/ourServices/branding/pills/1.png',



];

const Slider = () => {
  const mobile = useMediaQuery("(max-width: 1023px) and (min-width: 0)");

  const spaceBetween = () => {
    if (!mobile) {
      return 55;
    } else return 25;
  };

  const preview = () => {
    if (!mobile) {
      return 3;
    } else return 1;
  };


  return (
    <div className={styles.thirdSlider}>
      <Swiper
        className="slider"
        modules={[Controller, Navigation, Autoplay, FreeMode]}
        spaceBetween={spaceBetween()}
        slidesPerView={preview()}
        navigation
        loop={true}
        grabCursor={true}
        speed={1200}
      >
        {slides.map((item: any, index) => (
          <SwiperSlide key={index}>
            <img className={styles.img} src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
