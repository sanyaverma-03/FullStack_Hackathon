import styles from "./index.module.css";

const InputBox = ({
  text,
  type,
  placeholderText,
  email,
  style,
  onChange,
  mark,
}) => {
  return (
    <div>
      {text && (
        <p
          style={{
            fontWeight: "400",
            fontSize: "1rem",
            color: "#1E1E2F",
            marginBottom: "0.5rem",
          }}
        >
          {text}
          <a style={{ textDecoration: "none", color: "#173D7A" }} href="email">
            {email}
          </a>

          {mark && <span style={{ color: "red" }}>*</span>}
        </p>
      )}
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholderText}
        className={styles.InputBox}
      ></input>
    </div>
  );
};

export default InputBox;
