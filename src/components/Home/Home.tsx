//@ts-nocheck

import Line from "../../ui/Line/Line.tsx";
import { useMediaQuery } from "@react-hook/media-query";
import styles from "./Home.module.scss";
import { cards, cardsMobile } from "./data.ts";
import { CardProps } from "./data.ts";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  const Desktop = useMediaQuery("(min-width: 1280px)");
  const fullHD = useMediaQuery("(min-width:1280px)");
  const data = () => {
    if (!Desktop) {
      return cardsMobile;
    } else return cards;
  };

  const array = data();

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setState(false);
  }, []);

  const handleScroll = () => {
    // Проверяем, находится ли блок на экране при скролле
    const section = document.getElementById("home");
    const rect = section?.getBoundingClientRect();
    
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      // Блок на экране
      setState(false);
    } else {
      // Блок не на экране
      setState(true);
    }
  };

  return (
    <section id="home" className={styles.home}>
      <div className={styles.info}>
        <p className={styles.title}>
          <span>Your partner </span>
          <br /> in creating and <br /> growing brands
        </p>
        <p className={styles.subtitle}>
          We provide unique services in the field of branding of igaming,
          <br />
          fintech, e-commerce industry. At BRAND BOOST Agency, <br /> we believe
          that a well-designed brand can transform <br /> a business and create
          an unforgettable digital experience.
        </p>
        <div className={styles.cardsWrap}>
          {array?.map((card: CardProps) => {
            return (
              <div className={styles.cardWrap} key={card.id}>
                <img className={styles.img} src={card.img} alt={card.alt} />
                <p className={styles.cardTitle}>{card.title}</p>
                <p className={styles.cardSubtitle}>{card.subtitle}</p>
              </div>
            );
          })}
        </div>
        {Desktop ? null : (
          <div style={{ width: "100%" }}>
            <Line height="2px" />
          </div>
        )}
        {Desktop ? (
          <ul>
            <li>
              <span>partnership</span>
            </li>
            <div className={styles.verticalLine}></div>
            <li>transparency</li>
            <div className={styles.verticalLine}></div>
            <li>
              <span>respect</span>
            </li>
            <div className={styles.verticalLine}></div>
            <li>focus</li>
          </ul>
        ) : (
          <div className={styles.valuesWrap}>
            <p className={styles.valueTitle}>Our values:</p>
            <div className={styles.valueWrap}>
              <div className={styles.firtLine}>
                <p className={styles.pLine}>
                  <span>partnership</span>
                </p>
                <p>respect</p>
              </div>
              <Line height="1.5px" />
              <div className={styles.secondLine}>
                <p className={styles.pLine}>focus</p>
                <p>
                  <span>transparency</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      {fullHD ? (
        <div className={`${state ? styles.hidden : ""} ${styles.photo}`}>
          <img
            className={`${state ? styles.hidden : ""} ${styles.group}`}
            src="../../../img/home/pichi/group.png"
            alt=""
          />
          <img
            className={`${state ? styles.hidden : ""} ${styles.flower}`}
            src="../../../img/home/pichi/flower.png"
            alt=""
          />
          <img
            className={`${state ? styles.hidden : ""} ${styles.pills}`}
            src="../../../img/home/pichi/pills.png"
            alt=""
          />
          <img
            className={`${state ? styles.hidden : ""} ${styles.ads}`}
            src="../../../img/home/pichi/ads.png"
            alt=""
          />
          <img
            className={`${state ? styles.hidden : ""} ${styles.ronin}`}
            src="../../../img/home/pichi/ronin.png"
            alt=""
          />
        </div>
      ) : null}
    </section>
  );
}
