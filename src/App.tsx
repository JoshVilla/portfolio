import { motion } from "framer-motion";
import "./App.css";
import SkillSets from "./components/skillsets/SkillSets";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contact";

function App() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full">
      <main className="flex flex-col lg:flex-row justify-center items-center mt-20 w-2/3 mx-auto">
        <section className="space-y-3 flex-1">
          <h1 className="text-4xl">
            Hi, I&apos;m{" "}
            <span className="text-green-500"> Earl Joshua Villa</span>
          </h1>
          <div className="text-2xl">Front End Developer</div>
          <div>2 Years Experience</div>
          <p className="text-gray-600 text-sm text-justify">
            I&apos;m a front-end developer with 2 years of experience,
            specializing in building responsive and user-friendly web interfaces
            using React. I enjoy turning complex problems into clean, functional
            designs and have worked on a range of projects—from admin dashboards
            to customer-facing applications. With a strong focus on performance
            and usability, I aim to create seamless digital experiences that are
            both visually appealing and efficient.
          </p>
        </section>
        <aside className="flex-1 lg:flex justify-center items-center hidden">
          <div className="m-auto">
            <img
              src="/assets/profile.jpg"
              alt=""
              className="w-46 lg:w-66 rounded-full"
            />
          </div>
        </aside>
      </main>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <SkillSets />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Experiences />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Projects />
      </motion.section>

      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </div>
  );
}

export default App;
