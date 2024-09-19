import styles from "./TouchButton.module.scss";

export default function TouchButton({ color, backcolor, text }: any) {
  return (
    <button
      className={styles.btn}
      style={{
        color: `${color}`,
        backgroundColor: `${backcolor}`,
      }}
    >
      {text}
    </button>
  );
}
