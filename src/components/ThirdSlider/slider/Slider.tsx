import styles from "./Slider.module.scss";
import {
  Controller,
  EffectFade,
  Navigation,
  FreeMode,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./Slider.css";

const slides = [
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/2.png",
  "../../../img/thirdSlider/2.png",
];

// const slidesMobile = [
//   "../../../img/thirdSlider/4.png",
//   "../../../img/thirdSlider/2.png",
//   "../../../img/thirdSlider/3.png",
// ];

const Slider = () => {
  return (
    <>
      <div className={styles.thirdSlider}>
        <Swiper
          className="slider"
          modules={[Controller, Navigation, EffectFade, Autoplay, FreeMode]}
          // controller={{ control: controlledSwiper }}
          spaceBetween={24}
          slidesPerView={3}
          navigation
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {slides.map((item: any, index) => (
            <SwiperSlide key={index}>
              <img className={styles.img} src={item} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
