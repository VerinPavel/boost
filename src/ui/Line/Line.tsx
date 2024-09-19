import styles from "./Line.module.scss";

export default function Line({ mb, height }: any) {
  return (
    <div className={styles.line} style={{ marginBottom: `${mb}` }}>
      <div style={{ borderWidth: height }} className={styles.firstLine} />
      <img src="../../../img/line/star.png" alt="star" />
      <div style={{ borderWidth: height }} className={styles.secondLine} />
    </div>
  );
}
