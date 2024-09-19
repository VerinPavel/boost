import Line from "../../ui/Line/Line.tsx";
import { useMediaQuery } from "@react-hook/media-query";
import styles from "./Home.module.scss";
import { cards } from "./data.ts";
import { CardProps } from "./data.ts";

export default function Home() {
  const Desktop = useMediaQuery("(min-width: 1920px)");
  return (
    <section id="home" className={styles.home}>
      <div className={styles.info}>
        <p className={styles.title}>
          Your partner <br /> in creating and <br /> growing brands
        </p>
        <p className={styles.subtitle}>
          We provide unique services in the field of branding of igaming,
          <br />
          fintech, e-commerce industry. At BRAND BOOST Agency, <br /> we believe
          that a well-designed brand can transform <br /> a business and create
          an unforgettable digital experience.
        </p>
        <div className={styles.cardsWrap}>
          {cards?.map((card: CardProps) => {
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
        <div>
          {Desktop ? (
            <ul>
              <li>partnership</li>
              <li>transparency</li>
              <li>respect</li>
              <li>focus</li>
            </ul>
          ) : (
            <div className={styles.valuesWrap}>
              <p className={styles.valueTitle}>Our values:</p>
              <div className={styles.valueWrap}>
                <div className={styles.firtLine}>
                  <p className={styles.pLine}>partnership</p>
                  <p>respect</p>
                </div>
                <Line height="1.5px" />
                <div className={styles.secondLine}>
                  <p className={styles.pLine}>focus</p>
                  <p>transparency</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <div className={styles.photo}>
        <img
          className={styles.group}
          src="../../../img/home/pichi/group.png"
          alt=""
        />
        <img
          className={styles.flower}
          src="../../../img/home/pichi/flower.png"
          alt=""
        />
        <img
          className={styles.pills}
          src="../../../img/home/pichi/pills.png"
          alt=""
        />
        <img
          className={styles.ads}
          src="../../../img/home/pichi/ads.png"
          alt=""
        />
        <img
          className={styles.ronin}
          src="../../../img/home/pichi/ronin.png"
          alt=""
        />
      </div> */}
    </section>
  );
}
