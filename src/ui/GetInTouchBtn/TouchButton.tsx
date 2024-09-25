import styles from "./TouchButton.module.scss";

export default function TouchButton({
  onClick,
  color,
  backcolor,
  text,
  role,
}: any) {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      role={role}
      style={{
        color: `${color}`,
        backgroundColor: `${backcolor}`,
      }}
    >
      {text}
    </button>
  );
}
