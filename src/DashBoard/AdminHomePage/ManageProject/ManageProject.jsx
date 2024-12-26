import React, { useState } from "react";
import NavBarMobile from "../../NavBarDashBoard/NavBarMobile";
import NavBarDashBoard from "../../NavBarDashBoard/NavBarDashBoard";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {
  useAddprojectMutation,
  useDeleteProjectMutation,
  useGetAllProjectCategoryQuery,
  useGetAllProjectQuery,
  useGetAllSkillsQuery,
  useUpdateProjectMutation,
} from "../../../Redux/features/user/userApi";

const ManageProject = () => {
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // console.log("selectedUser", selectedUser);
  const { data: project, refetch: projectRefetch } =
    useGetAllProjectQuery(undefined);
  const { data: category } = useGetAllProjectCategoryQuery(undefined);
  const [addProject] = useAddprojectMutation();
  const [updateProject] = useUpdateProjectMutation();
  const [deleteProject] = useDeleteProjectMutation();

  const projects = project?.data || [];
  const categorys = category?.data || [];
  console.log("skills", projects);
  console.log("categorys", categorys);

  const handleAddProject = async (event) => {
    event.preventDefault();

    const form = event.target;
    const project_title = form.nameT.value;
    const category = selectedCategory;
    const live_link = form.live_link.value;
    const github_link = form.github_link.value;
    const img = form.img.value;
    const technology = form.technology.value;
    const description = form.description.value;

    const projectInfo = {
      project_title,
      category,
      live_link,
      github_link,
      img,
      technology,
      description,
    };
    console.log("productData", projectInfo);

    try {
      await addProject(projectInfo).unwrap();
      // console.log("Product added:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      const modal = document.getElementById("AddProductModal");
      if (modal) {
        modal.close();
      }
      projectRefetch();
    } catch (error) {
      // console.error("Failed to add product:", error);
    }
  };

  const handleEditProject = (projectId) => {
    console.log("skillId", projectId);
    const project = projects.find((p) => p._id === projectId);
    if (project) {
      setSelectedProjectId(projectId);
      setSelectedProject(project);

      const modal = document.getElementById("editProductModal");
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const project_title = form.nameT.value;
    const category = selectedCategory;
    const live_link = form.live_link.value;
    const github_link = form.github_link.value;
    const img = form.img.value;
    const technology = form.technology.value;
    const description = form.description.value;

    const projectModifyData = {
      project_title,
      category,
      live_link,
      github_link,
      img,
      technology,
      description,
    };
    console.log("productData", projectModifyData);
    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    try {
      await updateProject({
        projectId: selectedProjectId,
        projectModifyData,
      });
      // console.log("Product updated:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Updated Product info",
        showConfirmButton: false,
        timer: 1500,
      });

      const modal = document.getElementById("editProductModal");
      if (modal) {
        modal.close();
      }
      projectRefetch();
    } catch (error) {
      // console.error("Failed to update product:", error);
    }
  };

  const handleDeleteProject = (projectId) => {
    console.log(projectId);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProject(projectId).unwrap();
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          projectRefetch();
        } catch (error) {
          // console.error("Failed to delete product:", error);
          Swal.fire(
            "Error!",
            "There was an issue deleting the product.",
            "error"
          );
        }
      }
    });
  };
  return (
    <div className="w-full h-full min-h-screen bg-slate-100 text-black p-0 m-0 mt-20">
      <div className=" lg:hidden w-full h-full  ">
        <NavBarMobile />
      </div>
      <div className="w-full h-full min-h-screen   p-2">
        <div className="flex flex-row w-full h-full min-h-screen  ">
          <div className="w-fit h-full  ">
            <NavBarDashBoard />
          </div>
          <div className="w-full h-full  ">
            {/* All operation is here */}
            {/* All operation is here */}
            <div className="container mx-auto  ">
              <div className="flex justify-between pt-5">
                <h2 className="text-2xl text-black font-semibold pl-7">
                  Project Management
                </h2>

                <button
                  onClick={() => {
                    const modal = document.getElementById("AddProductModal");
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                  className="flex text-white btn bg-[#1A4870] hover:bg-[#5B99C2] btn-md justify-between  "
                >
                  <span>
                    <IoAddCircleOutline className="w-6 h-7" />
                  </span>
                  <span>Add Project</span>
                </button>
                <dialog id="AddProductModal" className="modal  ">
                  <div className="modal-box bg-[#1A4870]  ">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    {/* add car form */}
                    <form onSubmit={handleAddProject}>
                      <div className="flex justify-center pt-5 ">
                        <h1 className="text-white text-3xl ">
                          Add New Project
                        </h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        <div>
                          <label className="pr-16 text-white">Name:</label>
                          <input
                            type="text"
                            name="nameT"
                            required
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-9 text-white">Category:</label>
                          <select
                            onChange={(e) =>
                              setSelectedCategory(e.target.value)
                            } // Update state with the selected value
                            value={selectedCategory || ""} // Ensure the selected value reflects the state
                            className="select select-bordered w-full max-w-60 bg-[#1A4870] text-white "
                          >
                            <option value="" disabled>
                              Select Category
                            </option>
                            {categorys.map((category, index) => (
                              <option
                                key={index}
                                value={category.category_title}
                              >
                                {category.category_title}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="pr-16 text-white">Live link:</label>
                          <input
                            type="text"
                            name="live_link"
                            required
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-16 text-white">
                            Github link:
                          </label>
                          <input
                            type="text"
                            name="github_link"
                            required
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                          <div>
                            <label className="pr-16 text-white">
                              Image link:
                            </label>
                            <input
                              type="text"
                              name="img"
                              required
                              placeholder="Enter user name"
                              className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                            />
                          </div>
                          <div>
                            <label className="pr-16 text-white">
                              Technology:
                            </label>
                            <input
                              type="text"
                              required
                              name="technology"
                              placeholder="Enter user email  "
                              className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                            />
                          </div>
                          <div className="flex flex-row align-middle">
                            <label className="pr-8  text-white">
                              Description:
                            </label>
                            <textarea
                              name="description"
                              className="textarea textarea-bordered w-full max-w-sm bg-[#1A4870] text-white"
                              placeholder="Bio"
                            ></textarea>
                          </div>
                          <div className="flex justify-center my-5  ">
                            <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    {/* add car form */}
                  </div>
                </dialog>
                {/* edit modal */}
                <dialog id="editProductModal" className="modal">
                  <div className="modal-box bg-[#1A4870]">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form onSubmit={handleEditFormSubmit}>
                      <div className="flex justify-center pt-5 ">
                        <h1 className="text-white text-3xl ">
                          {selectedProjectId ? "Edit User" : "Add New User"}
                        </h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        {selectedProjectId && (
                          <div className="text-white text-center mb-4">
                            <p>Project ID: {selectedProjectId}</p>
                          </div>
                        )}
                        <div className="flex flex-col gap-2">
                          <div>
                            <label className="pr-16 text-white">Name:</label>
                            <input
                              type="text"
                              name="nameT"
                              defaultValue={selectedProject.project_title}
                              required
                              placeholder="Enter user name"
                              className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                            />
                          </div>
                          <div>
                            <label className="pr-9 text-white">Category:</label>
                            <select
                              onChange={(e) =>
                                setSelectedCategory(e.target.value)
                              }
                              value={
                                selectedCategory ||
                                selectedProject?.category ||
                                ""
                              }
                              className="select select-bordered w-full max-w-60 bg-[#1A4870] text-white "
                            >
                              <option value="" disabled>
                                Select Category
                              </option>
                              {categorys.map((category, index) => (
                                <option
                                  key={index}
                                  value={category.category_title}
                                >
                                  {category.category_title}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="pr-16 text-white">
                              Live link:
                            </label>
                            <input
                              type="text"
                              name="live_link"
                              required
                              defaultValue={selectedProject.live_link}
                              placeholder="Enter user name"
                              className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                            />
                          </div>
                          <div>
                            <label className="pr-16 text-white">
                              Github link:
                            </label>
                            <input
                              type="text"
                              name="github_link"
                              required
                              defaultValue={selectedProject.github_link}
                              placeholder="Enter user name"
                              className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                            />
                            <div>
                              <label className="pr-16 text-white">
                                Image link:
                              </label>
                              <input
                                type="text"
                                name="img"
                                required
                                defaultValue={selectedProject.img}
                                placeholder="Enter user name"
                                className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                              />
                            </div>
                            <div>
                              <label className="pr-16 text-white">
                                Technology:
                              </label>
                              <input
                                type="text"
                                required
                                defaultValue={selectedProject.technology}
                                name="technology"
                                placeholder="Enter user email  "
                                className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                              />
                            </div>
                            <div className="flex flex-row align-middle">
                              <label className="pr-8  text-white">
                                Description:
                              </label>
                              <textarea
                                name="description"
                                defaultValue={selectedProject.description}
                                className="textarea textarea-bordered w-full max-w-sm bg-[#1A4870] text-white"
                                placeholder="Bio"
                              ></textarea>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-center my-5  ">
                          <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                            Edit
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </dialog>
                {/* edit modal */}
              </div>
              {/* table view */}
              <div className="container mx-auto overflow-x-auto pb-5 w-full max-w-4xl">
                <table className="table w-full ">
                  {/* head */}
                  <thead className="text-black text-lg">
                    <tr>
                      <th>Name</th>
                      <th>Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {projects.length === 0 ? (
                      <div>sorry</div>
                    ) : (
                      projects.map((user) => (
                        <>
                          <tr key={user._id} className="hover:bg-gray-300">
                            <td>
                              <div className="flex items-center gap-3  ">
                                <div className="avatar"></div>
                                <div className="flex flex-row gap-2 justify-center items-center">
                                  <div>
                                    <img
                                      src={user.img}
                                      alt=""
                                      className="w-16 h-16 rounded-lg"
                                    />
                                  </div>
                                  <div className="font-semibold">
                                    {user.project_title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <div className="font-semibold">
                                  {user.category}
                                </div>
                              </div>
                            </td>
                            <th>
                              <div className="space-x-0">
                                <button
                                  onClick={() => handleEditProject(user._id)}
                                  className="btn btn-ghost btn-sm  "
                                >
                                  <GrTransaction className="w-6 h-6 " />
                                </button>
                                <button
                                  onClick={() => handleDeleteProject(user._id)}
                                  className="btn btn-ghost btn-sm"
                                >
                                  <MdDeleteForever className="w-6 h-6 text-red-700 " />
                                </button>
                              </div>
                            </th>
                          </tr>
                        </>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              {/* table view */}
            </div>
            {/* All operation is here */}
            {/* All operation is here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProject;
