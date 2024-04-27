import Layout from "../03_compounds/Layout/layout";
import StudentList from "../04_organisms/students_list";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <Layout>
        <div style={{ display: "flex", gap: "2rem", margin: "2rem" }}>
          <Link to="/adminDashboard">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              List Students
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
        <StudentList />
      </Layout>
    </>
  );
};

export default AdminDashboard;
