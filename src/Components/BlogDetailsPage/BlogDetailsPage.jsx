import React from "react";
import { useGetAllBlogByIdQuery } from "../../Redux/features/user/userApi";
import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const { data: projects } = useGetAllBlogByIdQuery({ id });
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
            <div className=" bg-[#ffffff10] w-10/12 h-fit  rounded-2xl cursor-pointer ml-10 mt-10 pt-5">
              <div className="w-full h-fit flex flex-col   items-left pl-5">
                <div className="w-full h-[500px] ">
                  <img
                    src={project.img}
                    alt=""
                    className="w-full h-full rounded-xl"
                  />
                </div>
                <div className="w-full h-full pt-5">
                  <div className="h-full">
                    <p className="text-[#79d2a6] text-4xl  font-bold   py-3">
                      {project.bolg_title}
                    </p>
                    <p className="text-[#79d2a6] text-xl  font-semibold   ">
                      <div
                        className="mb-4 text-[#79d2a6] py-5"
                        dangerouslySetInnerHTML={{ __html: project.Content }}
                      />
                    </p>
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

export default BlogDetailsPage;
