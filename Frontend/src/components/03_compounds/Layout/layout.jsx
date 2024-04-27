import SideBar from "../Sidebar/sidebar";
import styles from "./index.module.css";
import Navbar from "../navbar";

const Layout = ({ children }) => {
  return (
    <>
    <Navbar/>
      <div className={styles.layoutContainer}>
        <SideBar />
        <div style={{ flex: 1 }}>{children}</div>
      </div>
    </>
  );
};

export default Layout;