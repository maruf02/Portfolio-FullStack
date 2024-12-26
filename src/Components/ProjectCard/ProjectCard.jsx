import "./ProjectCard.css";
import { Link } from "react-router-dom";
const ProjectCard = ({ card }) => {
  const {
    _id,
    project_title,
    category,
    img,
    description,
    live_link,
    github_link,
    technology,
  } = card;
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <section className=" p-2 justify-center ">
        <div className=" relative w-[410px] h-[740px] bg-[#1b1b42] flex  justify-center content-center overflow-hidden">
          <div className="login-form absolute bg-[#1b1b42] inset-1 p-2 z-10 ">
            <div className="img-container relative w-full h-72 bg-[#1b1b42] flex  justify-center overflow-hidden">
              <div className="img-form absolute bg-[#1b1b42] inset-1 p-1 z-10">
                <img src={img} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="txt-container   relative w-full h-[400px] bg-[#34347f] mt-2  pl-4 text-[#00ccff]">
              <div className="flex flex-col h-3/4">
                <p className="text-xl font-bold ">{project_title}</p>
                <p className="pt-3  ">
                  <span className="text-sm bg-[#00ccff] font-semibold px-2 py-1 text-[#34347f] rounded-xl ">
                    {category}
                  </span>
                </p>
                <br />
                <p className="text-base font-semibold text-start  ">
                  {technology}
                </p>
                <p className="text-base font-semibold text-start  ">
                  {description}
                </p>
              </div>
              {/* ****************** */}
              {/* <Link to={`/Projects/${id}`}> */}
              <div className="flex flex-row justify-center gap-5">
                <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-6  ">
                  <button
                    onClick={() => openInNewTab(live_link)}
                    className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[156px] rounded-[50px]"
                  >
                    Live
                  </button>
                </div>
                <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-6  ">
                  <button
                    onClick={() => openInNewTab(github_link)}
                    className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[156px] rounded-[50px]"
                  >
                    Github
                  </button>
                </div>
              </div>
              {/* ****************** */}
              <Link to={`/Projects/${_id}`}>
                <div className="flex flex-row justify-center gap-5">
                  <div className="outer relative  h-12 w-72 rounded-[50px] mt-3 -top-7  ">
                    <button
                      className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[284px] rounded-[50px]"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
              {/* ****************** */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
