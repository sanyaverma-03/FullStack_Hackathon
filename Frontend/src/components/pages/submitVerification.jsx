import Layout from "../03_compounds/Layout/layout";
import { Link } from "react-router-dom";

const SubmitVerify = () => {
  return (
    <>
      <Layout>
        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        style={{margin:"10rem 15rem"}}>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Your application has been successfully saved!. Thank you for filling
            out the form.
          </h5>

          <Link to="/studentDashboard">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Back
            </button>
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default SubmitVerify;
