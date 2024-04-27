import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.css";
import InputBox from "../../01_atoms/InputBox";
import Button1 from "../../01_atoms/Buttons/Button_01";
import DropDown from "../../01_atoms/DropDown";
import { degrees, fields, pg } from "../../../data";
import RadioBtn2 from "../../01_atoms/RadioBtn2";
import InputBox2 from "../../01_atoms/InputBox2";

const AppForm = ({ details, setDetails, onSubmit }) => {
  const [showList, setShowList] = useState(false);
  const [showCourseInput, setShowCourseInput] = useState(false);
  const [showFieldInput, setShowFieldInput] = useState(false);
  return (
    <>
      <div style={{ display: "flex", gap: "2rem", margin: "2rem" }}>
        <Link to="/studentDashboard">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Application Form
          </button>
        </Link>

        <Link to="/checkStatus">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Check status
          </button>
        </Link>

        <Link to="/">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Log out
          </button>
        </Link>
      </div>

      <div
        style={{
          margin: " 2rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <h1 class="text-4xl font-extrabold dark:text-gray-900 mb-5">
          Application Form
        </h1>
        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Full Name"}
              mark
              placeholderText={"Enter your full name"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Date of Birth"}
              mark
              placeholderText={"03-06-2002"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Gender"}
              mark
              placeholderText={"Male/Female/Others"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Nationality"}
              mark
              placeholderText={"Indian"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  name: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Contact number"}
              mark
              placeholderText={"Enter mobile number"}
              type={"number"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  contact: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Another contact number"}
              placeholderText={"Enter alternative number"}
              type={"number"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  contact: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Which university/college were you studying in?"}
              mark
              placeholderText={"University/College name"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    school_name: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <DropDown
              text={"What course were you studying?"}
              options={degrees}
              onSelect={(e) => {
                if (e.target.value === "Others") {
                  setShowCourseInput(true);
                  return;
                }

                setShowCourseInput(false);
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    course_name: e.target.value,
                  },
                });
              }}
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Enter CGPA obtained in Bachelors"}
              mark
              placeholderText={"CGPA"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    school_name: e.target.value,
                  },
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Any other achievements in Bachelors"}
              placeholderText={"Academics/Extra-curricular activities"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    school_name: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.width50}>
            <DropDown
              text={"What course are you looking for now?"}
              options={pg}
              onSelect={(e) => {
                if (e.target.value === "Others") {
                  setShowCourseInput(true);
                  return;
                }

                setShowCourseInput(false);
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    course_name: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Any gap in studies"}
              placeholderText={"Yes/No"}
              mark
              onChange={(e) =>
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    school_name: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.width50}>
            <DropDown
              text={"What course are you looking for now?"}
              options={pg}
              onSelect={(e) => {
                if (e.target.value === "Others") {
                  setShowCourseInput(true);
                  return;
                }

                setShowCourseInput(false);
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    course_name: e.target.value,
                  },
                });
              }}
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Any gap in studies"}
              placeholderText={"Yes/No"}
              mark
              onChange={(e) =>
                setDetails({
                  ...details,
                  details: {
                    ...details.details,
                    school_name: e.target.value,
                  },
                })
              }
            />
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.width50}>
            <InputBox
              text={"Marks in 10th"}
              mark
              placeholderText={"CGPA/Percentage in 10th"}
              type={"number"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  contact: e.target.value,
                })
              }
            />
          </div>
          <div className={styles.width50}>
            <InputBox
              text={"Marks in 12th"}
              mark
              placeholderText={"CGPA/Percentage in 12th"}
              type={"number"}
              onChange={(e) =>
                setDetails({
                  ...details,
                  contact: e.target.value,
                })
              }
            />
          </div>
        </div>
        <InputBox2
          text={"Subjects you are interestes in?"}
          placeholderText={"AI/ML/Frontend etc."}
          onChange={(e) =>
            setDetails({
              ...details,
              details: {
                ...details.details,
                reason_of_interest: e.target.value,
              },
            })
          }
        />
        <Link to="/submitverify">
          <Button1
            style={{ width: "10rem" }}
            text={"Submit Form"}
            onClick={onSubmit}
          />
        </Link>
      </div>
    </>
  );
};

export default AppForm;
