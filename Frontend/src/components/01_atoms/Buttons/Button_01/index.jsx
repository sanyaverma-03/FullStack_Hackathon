import styles from "./index.module.css";

const Button1 = ({ text, style, onClick }) => {
  return (
    <button
      className={styles.btn1}
      onClick={onClick}
      style={{
        ...style,
      }}
    >
      {text}
    </button>
  );
};

export default Button1;

