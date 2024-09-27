import styles from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./Slider.css";
import {
  Autoplay,
  Controller,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import { useRef } from "react";

export default function Slider({ array }: any) {
  const swiperRef = useRef(null);
  return (
    <div className={styles.wraper}>
      <Swiper
        ref={swiperRef}
        className="our-slider"
        modules={[Controller, Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 3000 }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={true}
        grabCursor={true}
      >
        {array.map((slider: any) => (
          <SwiperSlide key={slider.id}>
            <div className={styles.slider}>
              <div className={styles.imgWrap}>
                <img src={slider.firstImg} alt="" />
              </div>
              <div className={styles.smallimg}>
                {slider.secondImg && (
                  <img src={slider.secondImg} alt={slider.id} />
                )}
                {slider.thirdImg && (
                  <img src={slider.thirdImg} alt={slider.id} />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
