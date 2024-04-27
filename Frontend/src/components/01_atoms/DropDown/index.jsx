import styles from "./index.module.css";

const DropDown = ({ text, options, onSelect }) => {

  function toCapitalize(str) {
    return str?.charAt(0)?.toUpperCase() + str?.slice(1);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
      <label
        style={{
          fontWeight: "400",
          fontSize: "1rem",
          color: "#1E1E2F",
        }}
      >{text}<span style={{ color: "red", fontWeight: "bold" }}>*</span>
      </label>
      <select
        id="dropdown"
        name="dropdown"
        className={styles.DropInput}
        onChange={onSelect}
      >
        <option value="" disabled selected hidden>
          Select
        </option>
        {options &&
          options.map((option, idx) => (
            <option value={option} className={styles.DropOptions} key={idx}>
              

              {toCapitalize(option)}
            </option>
          ))}
      </select>
    </div>
  );
};

export default DropDown;
