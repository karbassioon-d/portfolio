import { motion } from "framer-motion";
import {
  initialVariants,
  animateVariants,
  transition2,
  transition3,
} from "./MotionVariants";

const projects = [
  {
    title: "Goldn' Hours",
    description:
      "Goldn' Hours is the first weather-based social media website for professional photographers. You can upload photos and show the lighting and weather conditions in each post. Each of your posts shows up on a live map.",
    technologies: "React, FastAPI, MongoDB, Docker, Framer Motion, Tailwind CSS",
    videoSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7076942211086487553?compact=1",
    link: "https://github.com/karbassioon-d/goldn-hours",
  },
  {
    title: "Autonexus",
    description:
      "Autonexus is a fully car dealership management website. You can track your automobile inventory, sales, technicians, salespeople, and more. You can also make appointments for repairs.",
    technologies: "React, Django, PostgreSQL, Docker, Bootstrap",
    videoSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7069877814719639552?compact=1",
    link: "https://github.com/karbassioon-d/autonexus",
  },
  // {
  //   title: "Twitter Clone API",
  //   description:
  //     "Developed a comprehensive social media backend API inspired by Twitter's core functionality, built with Java Spring Boot and relational database persistence through JPA/Hibernate. This system implements a robust architecture for managing complex relationships between users, tweets, and interactive social features.",
  //   technologies: "Java, Spring Boot, PostgreSQL, JPA",
  //   videoSrc:
  //     "",
  //   link: "https://github.com/fasttrackd-student-work/spring-assessment-social-media-march-2025-team-1",
  // },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-4 md:px-16 pt-20">
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20, filter: "drop-shadow(0 0 0px transparent)" }}
        animate={{ opacity: 1, y: 0, filter: "drop-shadow(0 0 0px transparent)" }}
        whileHover={{ filter: "drop-shadow(0 0 8px #32CD32)" }}
        transition={{ duration: 0.5 }}
        className="text-green-500 font-josefin text-4xl md:text-5xl mb-6"
      >
        Experience
      </motion.h1>


      {/* Project Cards */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col md:flex-row items-start gap-8 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl"
            initial={initialVariants}
            animate={animateVariants}
            transition={index === 0 ? transition2 : transition3}
            whileHover={{ scale: 1.02 }}
          >
            {/* Video / Iframe */}
            <div className="w-full max-w-[720px] p-4 mx-auto rounded-lg overflow-hidden bg-gray-800">
  <iframe
    src={project.videoSrc}
    className="w-full aspect-video border-none rounded-lg"
    title={project.title}
    allowFullScreen
  ></iframe>
</div>


            {/* Project Content */}
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-green-300 mb-4">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
                <strong>Technologies:</strong> {project.technologies}
              </p>
              <a href={project.link} target="blank" >View Project on GitHub</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;