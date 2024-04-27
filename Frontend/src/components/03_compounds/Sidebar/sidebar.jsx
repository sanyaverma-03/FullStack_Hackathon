import UniImg from "../../../assets/uni3.jpg";
import styles from "./index.module.css";

const SideBar = () => {
  const isLargeScreen = window.innerWidth > 770;

  return (
    <>
      <div className={styles.SideContainer}>
        <div>
          <div
            style={{
              borderRadius: "24px",
              overflow: "hidden",
              width: "100%",
            }}
          >
            {isLargeScreen ? (
              <div>
                <img
                  src={UniImg}
                  alt="Large"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            ) : (
              <img
                src={UniImg}
                alt="Small"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <div>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                marginBottom: "0.5rem",
                marginTop: "2rem",
              }}
            >
              XYZ University
            </p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "1rem",
                color: "#5D7290",
              }}
            >
              Join us at to discover new-age careers beyond Arts, Science &
              Commerce.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.mobileNav}>
        <img
          src={UniImg}
          style={{
            width: "100%",
          }}
        />
      </div>
    </>
  );
};

export default SideBar;
