import Slider from "./slider/Slider";
import styles from "./ThirdSlider.module.scss";

export default function ThirdSlider() {
  return (
    <section id="clients" className={styles.ThirdSlider}>
      <div className={styles.bacgroundColor}>
        <div className={styles.titleWrap}>
          <p className={styles.title}>our clients</p>
          <p className={styles.subtitle}>
            Read through our testimonials to see why our clients love working
            with us and how we can help <br /> you achieve your business goals
            through creative and effective design.
          </p>
        </div>
      </div>
      <div style={{ padding: "0 25px", width: "100%", display: 'flex', justifyContent: 'center' }}>
        <Slider />
      </div>
    </section>
  );
}
