import { useContext, useState } from "react";
import Button1 from "../../01_atoms/Buttons/Button_01";
import InputBox from "../../01_atoms/InputBox";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

const OtpVerification = ({onClick,resendOtp}) => {

  return (
    <div className={styles.VerContainer}>
      <InputBox
        text={"The OTP has been sent to "}
        placeholderText={"Enter OTP"}
        onChange={(e) => setOtp(e.target.value)}
      />
      <Button1 text={"Verify"} onClick={onClick} />
      <p
        style={{
          color: "#173D7A",
          fontSize: "1rem",
          cursor: "pointer",
          marginTop: "-1rem",
        }}
      >
        <span onClick={resendOtp}>Resend OTP</span>
        <span style={{ color: "black" }}> or </span>
        <span
          onClick={() => {
            navigate("/login");
          }}
        >
          Change Email ID
        </span>
      </p>
    </div>
  );
};

export default OtpVerification;
