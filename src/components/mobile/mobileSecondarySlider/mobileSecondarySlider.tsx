// @ts-nocheck

import styles from "./mobileSecondarySlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Autoplay, Controller, EffectFade, Navigation } from "swiper/modules";

import "swiper/css/bundle";
import "./slider.css";

const mobileImg = [
  {
    id: 1,
    img: "img/secondSlider/Frame19194.png",
  },
  {
    id: 2,
    img: "img/secondSlider/Frame19194.png",
  },
  {
    id: 3,
    img: "img/secondSlider/Frame19194.png",
  },
  {
    id: 4,
    img: "img/secondSlider/Frame19194.png",
  },
];

const mobileArray = [
  {
    id: 1,
    title: "RR Group Website",
    desc: "We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.",
  },
  {
    id: 2,
    title: "casino in canada",
    desc: "We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas.",
  },
  {
    id: 3,
    title: "traffic pills",
    desc: "We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data.",
  },
  {
    id: 4,
    title: "traffic pills",
    desc: "We start by getting to know our clients, their business goals, and their target audience.",
  },
];

export default function MobileSecondarySlider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div className={styles.mobileSecondarySlider}>
      <div className={styles.top}>
        <p className={styles.topTitle}>Our Works</p>
        <p className={styles.topSubtitle}>
          Discover a portfolio of visually stunning and strategically crafted
          digital projects that showcase our creativity and expertise.
        </p>
      </div>
      <div className={styles.firstSliderWrap}>
        <Swiper
          className="firs-slider-mobile"
          modules={[Controller, Navigation, EffectFade, Autoplay]}
          controller={{ control: controlledSwiper }}
          spaceBetween={25}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          speed={1200}
          loop={true}
        >
          {mobileImg.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className={styles.imgWrap}>
                <img className={styles.img} src={item.img} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.secondSliderWrap}>
        <Swiper
          className="second-slider-mobile"
          modules={[EffectFade, Controller]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          onSwiper={setControlledSwiper}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          allowTouchMove={false}
        >
          {mobileArray.map((item: any) => (
            <SwiperSlide key={item.id}>
              <div className={styles.wrap}>
                <p className={styles.subtitle}>{item.title}</p>
                <div className={styles.descWrap}>
                  <p className={styles.desc}>{item.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
