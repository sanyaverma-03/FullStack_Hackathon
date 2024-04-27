import Layout from "../03_compounds/Layout/layout";
import Button1 from "../01_atoms/Buttons/Button_01";
import { useNavigate } from "react-router-dom";
import InputBox from "../01_atoms/InputBox";
import { useContext, useState } from "react";

const Login = ({ role }) => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    setLoading(true);
    const res = await loginAPI({ email });
    setLoading(false);
    if (!res.success) {
      alert("Error in sending message!");
      return;
    }

    setUser({ email, verified: false });
    navigate("/verify");
  };
  return (
    <>
      <Layout>
        <div style={{ margin: "2rem" }}>
          <h1 class="text-4xl font-extrabold dark:text-gray-900">
            Welcome {role == "Student" ? "Student!" : "Admin!"}
          </h1>
        </div>
        <div
          style={{
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2.5rem",
          }}
        >
          <InputBox
            text={"Email ID"}
            email={""}
            placeholderText={"Enter Email ID"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button1 text={"Send OTP"} onClick={onSubmit} />
        </div>
      </Layout>
    </>
  );
};

export default Login;
