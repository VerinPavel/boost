import styles from "./MobileFormBtn.module.scss";

export default function MobileFormBtn({ color, backcolor, text }: any) {
  return (
    <button
      className={styles.btn}
      style={{
        color: `${color}`,
        backgroundColor: `${backcolor}`,
        width: "100%",
      }}
    >
      {text}
    </button>
  );
}
