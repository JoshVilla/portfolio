import { Separator } from "../ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
const Projects = () => {
  const projects = [
    {
      title: "Project 1 Webisite",
      image: "/assets/abcCompany1.png",
      technologies: ["React", "Bootstrap"],
      link: "https://project1-modern.netlify.app/",
    },
    {
      title: "Project 2 Webisite",
      image: "/assets/abcCompany2.png",
      technologies: ["React", "Bootstrap"],
      link: "https://project2-modern.netlify.app/",
    },
    {
      title: "Boracay Website",
      image: "/assets/boracay.png",
      technologies: ["React", "Bootstrap"],
      link: "https://project4-modern.netlify.app/",
    },
    {
      title: "Burger Town Website",
      image: "/assets/burgerTown.png",
      technologies: ["React", "Bootstrap"],
      link: "https://burgertown-project.netlify.app/",
    },
    {
      title: "Grill House Website",
      image: "/assets/grillHouse.png",
      technologies: ["Wordpress"],
      link: "https://project1wordp.netlify.app/",
    },
    {
      title: "Properties Website",
      image: "/assets/properties.png",
      technologies: ["Wordpress"],
      link: "https://project2wordp.netlify.app/",
    },
  ];

  const fullStackProjects = [
    {
      title: "Blogify",
      technologies: ["Next.js", "Tailwind", "Shadcn", "Node.js", "MongoDB"],
      link: "https://blogsite-red.vercel.app/",
      description:
        "Blogify is a modern blogging platform that allows users to create, share, and explore a wide range of topics.",
    },
    {
      title: "Library Management System",
      technologies: ["Next.js", "Tailwind", "Shadcn", "Node.js", "MongoDB"],
      link: "https://library-management-kzv3.vercel.app/",
      description:
        "Web-based application designed to streamline the process of managing books, borrowers in a library. It allows librarians to track book inventory, monitor borrow and return activities, and manage user records efficiently—all in one centralized platform.",
    },
    {
      title: "Weather Forecast",
      technologies: ["Next.js", "Tailwind", "Shadcn", "Node.js", "Weather API"],
      link: "https://weather-forecast-henna-delta.vercel.app/",
      description:
        "Simple and intuitive web application that fetches real-time weather data based on user input. ",
    },
  ];

  const otherProjects = [
    {
      title: "Capstone Title Generator",
      technologies: [
        "Next.js",
        "Tailwind",
        "Shadcn",
        "JSON File",
        "Framer Motion",
      ],
      link: "https://casptone-title-generator.vercel.app/",
      description:
        "Web application designed to help students quickly generate creative and relevant capstone project titles.",
    },
    {
      title: "Bingo Number Picker",
      technologies: ["Next.js", "Tailwind", "Shadcn", "Framer Motion"],
      link: "https://bingo-number-picker.vercel.app/",
      description:
        "Simple interactive tool that randomly selects and displays bingo numbers in real-time. Designed for games and events, it ensures fair number generation with a clear visual display, making it easy for players to follow along.",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="w-2/3 mx-auto my-30">
      <div className="text-2xl">My Projects</div>
      <Separator />
      <div className="my-4 ">
        <div className="text-lg font-semibold">Landing Pages</div>
        <div className="mt-4 flex items-center justify-around flex-wrap gap-4">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <motion.div
                className="w-[300px] border-2 border-gray-300 p-2 rounded-lg hover:shadow-lg transition-shadow duration-300"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <img src={project.image} alt={project.title} />
                <div className="mt-4">
                  <div className="font-semibold mb-4 text-center">
                    {project.title}
                  </div>
                  <div className="flex items-center gap-4 mt-2 justify-center">
                    {project.technologies.map((technology, idx) => (
                      <Badge key={idx} className="bg-green-500">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold">Full Stack Projects</div>
        {fullStackProjects.map((project, index) => (
          <motion.div
            key={index}
            className="my-4 border p-2 rounded-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="text-lg">{project.title}</div>
            <div className="text-sm text-gray-800">{project.description}</div>
            <div className="my-4">
              <div className="text-xs font-bold">Tech Stacks Used</div>
              <div className="flex gap-4 mt-2 flex-wrap">
                {project.technologies.map((technology, idx) => (
                  <span key={idx} className="text-xs">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <a
              className="text-xs text-green-500 hover:underline cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>

      <div>
        <div className="text-lg font-semibold">Other Projects</div>
        {otherProjects.map((project, index) => (
          <motion.div
            key={index}
            className="my-4 border p-2 rounded-lg"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="text-lg">{project.title}</div>
            <div className="text-sm text-gray-800">{project.description}</div>
            <div className="my-4">
              <div className="text-xs font-bold">Tech Stacks Used</div>
              <div className="flex gap-4 mt-2 flex-wrap">
                {project.technologies.map((technology, idx) => (
                  <span key={idx} className="text-xs">
                    {technology}
                  </span>
                ))}
              </div>
            </div>
            <a
              className="text-xs text-green-500 hover:underline cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
