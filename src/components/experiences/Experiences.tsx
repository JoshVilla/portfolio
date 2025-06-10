import { Separator } from "../ui/separator";

const Experiences = () => {
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
    </div>
  );
};

export default Experiences;
