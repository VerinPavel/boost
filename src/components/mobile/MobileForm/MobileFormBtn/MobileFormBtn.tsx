import styles from "./MobileFormBtn.module.scss";

export default function MobileFormBtn({
  color,
  backcolor,
  text,
  handleClick,
  role,
}: any) {
  return (
    <button
      onClick={handleClick}
      className={styles.btn}
      role={role}
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
