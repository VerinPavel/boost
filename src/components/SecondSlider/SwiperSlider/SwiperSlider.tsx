// @ts-nocheck
import styles from "./SwiperSlider.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Controller, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "./SwiperSlider.css";

import { useState } from "react";

export default function SwiperSlider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <div className={styles.container}>
      <div className={styles.contanerInner}>
        <div className={styles.firstSliderWrap}>
          <Swiper
            className="first-slider"
            modules={[Controller, Navigation, EffectFade]}
            controller={{ control: controlledSwiper }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            //   autoplay
            //   pagination={{ clickable: true }}
            //   scrollbar={{ draggable: true }}
            //   onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19194.png" alt="" />
                </div>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19195.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19194.png" alt="" />
                </div>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19195.png" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19194.png" alt="" />
                </div>
                <div className={styles.imgWrap}>
                  <img src="../../../img/secondSlider/Frame19195.png" alt="" />
                </div>
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
            spaceBetween={0}
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <p className={styles.subtitle}>
                  Amet dolores officiis accusamus ad ipsa ut tenetur quaerat,
                  laudantium deserunt rem dolore animi iste voluptas fugit eaque
                  unde soluta quis earum!
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
                <p className={styles.title}>Lorem ipsum dolor </p>
                <p className={styles.subtitle}>
                  Amet dolores officiis accusamus ad ipsa ut tenetur quaerat,
                  laudantium deserunt rem dolore animi iste voluptas fugit eaque
                  unde soluta quis earum!
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
