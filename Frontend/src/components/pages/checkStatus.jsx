import Layout from "../03_compounds/Layout/layout";
import { Link } from "react-router-dom";

const CheckStatus = () => {
  return (
    <>
      <Layout>
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
        <div style={{ margin: "2rem" }}>
          <h1 class="text-4xl font-extrabold dark:text-gray-900">
            Your application has been accepted!!.
          </h1>
        </div>
      </Layout>
    </>
  );
};

export default CheckStatus;
