import Layout from "../03_compounds/Layout/layout";

const Contact = () => {
  return (
    <>
      <Layout>
        <div style={{ margin: "5rem" }}>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-900">
            University Name: XYZ University
          </p>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-900">
            Address: Vellore,Tamil Nadu
          </p>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-900">
            Phone Number: 012-34567678
          </p>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-900">
            Email Address: xyz@xyz.ac.in
          </p>
          <p class="mb-3 text-lg text-gray-500 md:text-xl dark:text-gray-900">
            Fax Number: 34567
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
