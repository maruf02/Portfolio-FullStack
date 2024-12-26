import { useParams } from "react-router-dom";
import { useGetAllProjectByIdQuery } from "../../Redux/features/user/userApi";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const { data: projects } = useGetAllProjectByIdQuery({ id });
  const project = projects?.data || [];
  console.log(project, id);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div>
      <div className="pt-12 lg:pt-14">
        <section
          className="bg-[#1B1B42] mx-auto w-full min-h-screen pb-16 "
          id="Portfolio"
        >
          <div className="container mx-auto flex items-center  justify-center w-full h-full pt-20">
            {/*team card-1  */}
            <div className=" bg-[#ffffff10] w-10/12 h-[460px]  rounded-2xl cursor-pointer ml-10 mt-10">
              <div className="w-full h-full flex flex-col md:flex-row items-left pl-5">
                <div className="w-full h-full ">
                  <img
                    src={project.img}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="w-full h-full pl-5">
                  <div className="h-full">
                    <p className="text-[#79d2a6] text-4xl  font-bold   py-3">
                      {project.project_title}
                    </p>
                    <p className="text-[#79d2a6] text-xl  font-bold   ">
                      {project.technology}
                    </p>
                    <p className="text-[#79d2a6] text-xl  font-semibold   ">
                      {project.description}
                    </p>
                  </div>
                  <div>
                    {/* *************** */}
                    <div className="flex flex-row justify-center gap-5">
                      <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-20 ">
                        <button
                          onClick={() => openInNewTab(project.live_link)}
                          className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[156px] rounded-[50px]"
                        >
                          Live
                        </button>
                      </div>
                      <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-20  ">
                        <button
                          onClick={() => openInNewTab(project.github_link)}
                          className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[156px] rounded-[50px]"
                        >
                          Github
                        </button>
                      </div>
                    </div>
                    {/* *************** */}
                  </div>
                </div>
              </div>
            </div>
            {/*team card-1  */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
