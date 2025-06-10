import { useState } from "react";
import { Separator } from "../ui/separator";
import { ArrowUp, ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const Experiences = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-2/3 mx-auto my-30">
      <div className="text-2xl">Experiences</div>
      <Separator />
      <div className="my-6">
        <div className="font-semibold text-lg text-green-500">
          Front End Developer Specialist
        </div>
        <div className="text-sm">
          {" "}
          Dynamic Strategy Solutions Experts Corporation
        </div>
        <div className="text-xs">December 2022 - October 2024</div>

        <ul className="list-disc pl-5 text-sm text-gray-700 my-2">
          <li className="text-sm">
            Tools used: JavaScript, SASS, Vue.js, React, TypeScript, Jenkins,
            Jira, Confluence, Postman
          </li>
          <li className="text-sm">
            Collaborated closely with designers and back-end developers to
            seamlessly integrate front-end components into application
            architecture.
          </li>
          <li className="text-sm">
            Built modular and reusable UI components using React.js and
            styled-components.
          </li>
          <li className="text-sm">
            Developed and maintained front-end code for admin websites using
            JavaScript frameworks such as React.js and Vue.js
          </li>
          <li className="text-sm">
            Implemented responsive layouts leveraging CSS preprocessors like
            Sass
          </li>
          <li className="text-sm">
            {" "}
            Improved website performance by refactoring code with code splitting
            techniques.
          </li>
          <li className="text-sm">
            {" "}
            Assisted colleagues in deploying code to various test environments
            using Jenkins.
          </li>
        </ul>
      </div>
      <div>
        <div className="font-semibold text-lg text-green-500">
          Thesis - St John Berchmans High School Learning Management System
        </div>
        <div className="text-sm"> AMA Computer College Santiago Campus</div>
        <div className="text-xs">October 2021</div>
        <ul className="list-disc pl-5 text-sm text-gray-700 my-2">
          <li className="text-sm">
            Tools Used: Html, Css, Bootstrap, PHP, Jquery and Sql, phpMyAdmin
          </li>
          <li className="text-sm">
            Developed a comprehensive teacher and student tracker for school
            use, enabling the creation, distribution, and download of learning
            materials. Incorporated advanced features such as quiz and exam
            creation and automated student points calculation.
          </li>
          <li className="text-sm">Code Editor: Visual Studio Code</li>
        </ul>
        <div className="text-xs text-gray-500">
          Link has been expired since 2024 due to inactivity of the website{" "}
        </div>
        <div
          className="text-xs flex gap-1 items-center mt-2 text-green-500 cursor-pointer hover:underline hover:text-green-700"
          onClick={() => setOpen(!open)}
        >
          <span>Check Images</span>
          {open ? <ChevronUp height={15} /> : <ChevronDown height={15} />}
        </div>
        {open && (
          <motion.div
            className="mt-4 flex items-center flex-wrap gap-4 justify-around"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <div className="w-[300px]">
              <img src="./assets/student.png" className="w-full" />
              <div className="text-center mt-4">Student Website</div>
            </div>
            <div className="w-[300px]">
              <img src="./assets/teacher.png" className="w-full" />
              <div className="text-center mt-4">Teacher Website</div>
            </div>
            <div className="w-[300px]">
              <img src="./assets/admin.png" className="w-full" />
              <div className="text-center mt-4">Admin Website</div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experiences;
