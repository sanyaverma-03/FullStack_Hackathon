import Layout from "../03_compounds/Layout/layout";
import { useContext, useEffect } from "react";
import OtpVerification from "../03_compounds/Verify_Otp";
import { useNavigate } from "react-router-dom";

const Verify= () => {
 
  return (
    <Layout>
      <OtpVerification/>
    </Layout>
  );
};

export default Verify;
