import { useState } from "react";

const RadioBtn2 = ({ text, options, name, onChange, mark }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <label
        style={{
          fontWeight: "400",
          fontSize: "1rem",
          color: "#1E1E2F",
        }}
      >
        {text}
      </label>
      {mark && <span style={{ color: "red" }}>*</span>}
      <br />
      <div style={{ display: "flex", gap: "2rem", marginTop: "1rem" }}>
        {options &&
          options.map((option, idx) => (
            <div key={idx} style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="radio"
                id={`option-${idx}`}
                name={name}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              <label htmlFor={`option-${idx}`}>{option}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RadioBtn2;
