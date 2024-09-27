import TouchButton from "../../../ui/GetInTouchBtn/TouchButton";
import styles from "./MobileOurSlider.module.scss";
import { array } from "./data";

export default function MobileOurSlider() {
  return (
    <div className={styles.MobileOurSlider}>
      <div className={styles.bacgroundColor}>
        <div className={styles.bannerTitleWrap}>
          <p className={styles.bannerTitle}>Our Services</p>
          <p className={styles.bannerSubtitle}>
            Brand Boost offers a range of design services that are tailored to
            meet the unique needs of each client
          </p>
        </div>
      </div>
      <div className={styles.contaner}>
        {array.map((item: any) => (
          <div className={styles.slide}>
            <div className={styles.top}>
              <img src="../../../../public/icon.png" alt="ad" />
              <p className={styles.title}>{item.title}</p>
            </div>
            <p className={styles.subtitle}>{item.subtitle}</p>
            <div className={styles.btnWrap}>
              <TouchButton
                text="Learn More"
                color="white"
                backcolor="#262626"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
