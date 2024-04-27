import Navbar from "./components/03_compounds/navbar";
import UniImg from "./assets/uni3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex", gap: "2rem" }}>
        <img
          src={UniImg}
          alt="university image"
          style={{ height: "32rem", width: "50%", marginTop: "5rem" }}
        />
        <div style={{ width: "50%", marginTop: "10rem" }}>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-900">
            Welcome to
          </h1>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:gray-900">
            XYZ University!
          </h1>
          <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-100 dark:first-letter:text-gray-500 first-letter:me-3 first-letter:float-start">
            VIT has a strong international presence across the world and
            academic partnerships with over 440 foreign universities. VIT
            provides options to study 2 years at VIT and 2 years at a partner
            foreign university. One may also study a semester abroad or engage
            in international research collaboration activities with partners.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
