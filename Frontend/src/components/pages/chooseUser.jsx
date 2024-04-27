import Card from "../02_molecules/card";
import Navbar from "../03_compounds/navbar";
import { Link } from "react-router-dom";
const ChooseUser = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          gap: "5rem",
          margin: "auto",
          justifyContent: "center",
          marginTop: "15rem",
        }}
      >
        <Link to="/adminlogin">
          <Card
            heading={"Admin"}
            text={
              "Login as an administrator to access the dashboard to manage student data"
            }
          />
        </Link>
        <Link to="/studentlogin">
          <Card
            heading={"Student"}
            text={
              "Login as a student to fill the application form or to view the status"
            }
          />
        </Link>
      </div>
    </>
  );
};

export default ChooseUser;
