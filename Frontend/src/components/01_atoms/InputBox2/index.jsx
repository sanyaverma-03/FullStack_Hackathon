import styles from "./index.module.css";

const InputBox2 = ({ text, placeholderText, email, onChange }) => {
  return (
    <div>
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
      </p>
      <input
        type="text"
        onChange={onChange}
        placeholder={placeholderText}
        className={styles.InputBox}
      ></input>
    </div>
  );
};

export default InputBox2;
