/* eslint-disable react/prop-types */
import { GoLinkExternal } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const {
    name,
    img,
    live_link,
    frontend_github_link,
    backend_github_link,
    description,
  } = project;

  return (
    <div
      data-aos="flip-left"
      data-aos-delay="200"
      data-aos-duration="1000"
      className="   "
    >
      <div className="w-64 h-96  hover:border-yellow-400 bg-base-300 transition-all  duration-1000 shadow-lg  hover:border-none border-yellow-300/80 hover:shadow-lg  shadow-slate-500  hover:shadow-yellow-500      shad  hover:scale-105  relative mb-5 shad    text-slate-100">
        <figure className="w-full h-full rounded-md  ">
          <img
            className="w-full    h-full mx-auto  "
            src={img}
            alt=""
          />
        </figure>
        <div className="project_text p-5 flex flex-col justify-between">
          <h1 className="text-3xl text-[yellow] font-bold text-center border-b-2 pb-2 border-sky-300 ">
            {name}
          </h1>

          <p className="text-xs font-nova font-light text-slate-200 text-justify">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 my-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-[yellow] px-1 py-1 text-xs font-semibold text-slate-700  rounded"
              >
                {tool}
              </span>
            ))}
          </div>
          <div className="flex justify-around  w-full ">
            <a
              href={live_link}
              className="w-16   transition duration-200 hover:text-green-500 text-red-500 justify-center items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
            >
              <GoLinkExternal className="text-lg " />{" "}
              <span className=" ">Live Link</span>{" "}
            </a>
            <a
              href={frontend_github_link}
              className="w-14 justify-center text-[#34ebb4] transition duration-200 hover:text-green-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
            >
              <FiGithub className="text-lg" /> <span>Frontend</span>{" "}
            </a>
            {backend_github_link ? (
              <a
                href={backend_github_link}
                className="w-14 justify-center text-[orange] transition duration-200 hover:text-green-500 items-center  h-12  text-sm  font-nova font-semibold flex flex-col "
              >
                <FiGithub className="text-lg" /> <span>Backend</span>{" "}
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
