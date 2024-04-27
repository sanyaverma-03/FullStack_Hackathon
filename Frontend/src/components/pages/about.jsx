import Layout from "../03_compounds/Layout/layout";

const About = () => {
  return (
    <div>
      <Layout>
        <div
          style={{
            paddingBottom: "2rem",
            marginLeft: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <h1 class="text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
              ABOUT US!
            </h1>
          </div>

          <div>
            <h4 class="text-2xl font-bold dark:text-gray-900">Overview</h4>
            <p>
              XYZ University is a leading institution of higher education
              dedicated to providing outstanding academic programs, fostering
              innovative research, and cultivating a vibrant campus community.
              Founded in 2000, XYZ University has a rich history of academic
              excellence and a commitment to preparing students for success in
              their chosen fields.
            </p>
          </div>

          <div>
            <h4 class="text-2xl font-bold dark:text-gray-900">Mission</h4>
            <p>
              Our mission at XYZ University is to inspire and empower students
              to reach their full potential through transformative education,
              impactful research, and meaningful engagement with the world
              around them. We strive to create a dynamic learning environment
              that promotes intellectual curiosity, critical thinking, and
              ethical leadership.
            </p>
          </div>

          <div>
            <h4 class="text-2xl font-bold dark:text-gray-900">Vision</h4>
            <p>
              As a global leader in education and research, XYZ University
              envisions a future where knowledge knows no bounds and individuals
              from all backgrounds have access to opportunities for personal and
              professional growth. We aim to be at the forefront of innovation,
              driving positive change in society and shaping the leaders of
              tomorrow.
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
