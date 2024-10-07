// @ts-nocheck
import styles from "./SwiperSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Controller,
  Navigation,
  Autoplay,
  FreeMode,
} from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./SwiperSlider.css";

import { useEffect, useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";

export default function SwiperSlider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [spaceBetween, setSpaceBetween] = useState(55);
  const mobile = useMediaQuery("(max-width: 1023px) and (min-width: 0)");

  useEffect(() => {
    if (!mobile) {
      setSpaceBetween(55);
    } else setSpaceBetween(25);
  }, [mobile]);

  return (
    <div className={styles.container}>
      <div className={styles.contanerInner}>
        <div className={styles.firstSliderWrap}>
          <Swiper
            className="first-slider"
            modules={[Controller, Autoplay, FreeMode]}
            controller={{ control: controlledSwiper }}
            spaceBetween={55}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            speed={1200}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap}>
                  <img src="/img/secondSlider/Frame19194.png" alt="" />
                </div>
                <div className={styles.imgWrap}>
                  <img src="/img/secondSlider/Frame19195.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap}  style={{width: '100%'}}>
                  <img src="/img/ourServices/branding/pills/1.png" alt="" />
                </div>
                {/* <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19195.png" alt="" />
                </div> */}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap} style={{width: '100%'}}>
                  <img src="/img/secondSlider/casino.png" alt="" />
                </div>
                {/* <div className={styles.imgWrap}>
                  <img src="/img/secondSlider/Frame19195.png" alt="" />
                </div> */}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.secondSliderWrap}>
          <Swiper
            className="secondary-slider"
            modules={[EffectFade, Controller]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            onSwiper={setControlledSwiper}
            spaceBetween={spaceBetween}
            slidesPerView={1}
            loop={true}
            allowTouchMove={false}
          >
            <SwiperSlide>
              <div className={styles.tagsWrap}>
                <button className={styles.tag}>UX Research</button>
                <button className={styles.tag}>Wireframe</button>
                <button className={styles.tag}>Visual Design</button>
              </div>
              <div className={styles.secondSlide}>
                <p className={styles.title}>R&R Group website & Logo</p>
                <p className={styles.subtitle}>
                  We start by getting to know our clients, their business goals,
                  and their target audience. This involves conducting research,
                  analyzing data, and discussing ideas with our clients to gain
                  a deep understanding of their needs.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.tagsWrap}>
                <button className={styles.tag}>UX Research</button>
                <button className={styles.tag}>Wireframe</button>
                <button className={styles.tag}>Visual Design</button>
              </div>
              <div className={styles.secondSlide}>
                <p className={styles.title}>
                Traffic Pills
                </p>
                <p className={styles.subtitle}>
                We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.tagsWrap}>
                <button className={styles.tag}>UX Research</button>
                <button className={styles.tag}>Wireframe</button>
                <button className={styles.tag}>Visual Design</button>
              </div>
              <div className={styles.secondSlide}>
                <p className={styles.title}>Casino in Canada </p>
                <p className={styles.subtitle}>
                We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
