import React, { useState } from "react";
import NavBarMobile from "../../NavBarDashBoard/NavBarMobile";
import NavBarDashBoard from "../../NavBarDashBoard/NavBarDashBoard";
import { IoAddCircleOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { MdDeleteForever } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import {
  useAddprojectCategoryMutation,
  useAddSkillMutation,
  useDeleteProjectCategoryMutation,
  useDeleteSkillMutation,
  useGetAllProjectCategoryQuery,
  useGetAllSkillsQuery,
  useUpdateProjectCategoryMutation,
  useUpdateSkillMutation,
} from "../../../Redux/features/user/userApi";

const ManageSkill = () => {
  const [selectedSkillId, setSelectedSkillId] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // console.log("selectedUser", selectedUser);
  const { data: skill, refetch: skillRefetch } =
    useGetAllSkillsQuery(undefined);
  const { data: category, refetch: CategoryRefetch } =
    useGetAllProjectCategoryQuery(undefined);
  const [addSkill] = useAddSkillMutation();
  const [addCategory] = useAddprojectCategoryMutation();
  const [updateSkill] = useUpdateSkillMutation();
  const [updateCategory] = useUpdateProjectCategoryMutation();
  const [deleteSkill] = useDeleteSkillMutation();
  const [deleteCategory] = useDeleteProjectCategoryMutation();

  const skills = skill?.data || [];
  const categorys = category?.data || [];
  console.log("skills", skills);
  console.log("categorys", categorys);

  const handleAddSkill = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const value = form.value.value;
    const color = form.color.value;
    const type = form.type.value;

    const skillInfo = {
      title,
      value,
      color,
      type,
    };
    console.log("productData", skillInfo);

    try {
      await addSkill(skillInfo).unwrap();
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
      skillRefetch();
    } catch (error) {
      // console.error("Failed to add product:", error);
    }
  };

  const handleAddCategory = async (event) => {
    event.preventDefault();

    const form = event.target;
    const category_title = form.title.value;

    const projectCategoryInfo = {
      category_title,
    };
    console.log("productData", projectCategoryInfo);

    try {
      await addCategory(projectCategoryInfo).unwrap();
      // console.log("Product added:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });

      const modal = document.getElementById("AddProductModalCategory");
      if (modal) {
        modal.close();
      }
      CategoryRefetch();
    } catch (error) {
      // console.error("Failed to add product:", error);
    }
  };

  const handleEditSkill = (skillId) => {
    console.log("skillId", skillId);
    const skill = skills.find((p) => p._id === skillId);
    if (skill) {
      setSelectedSkillId(skillId);
      setSelectedSkill(skill);

      const modal = document.getElementById("editProductModal");
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleEditCategory = (projectCategoryId) => {
    console.log("skillId", projectCategoryId);
    const projectCategory = categorys.find((p) => p._id === projectCategoryId);
    if (skill) {
      setSelectedCategoryId(projectCategoryId);
      setSelectedCategory(projectCategory);

      const modal = document.getElementById("editProductModalCategory");
      if (modal) {
        modal.showModal();
      }
    }
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const value = form.value.value;
    const color = form.color.value;
    const type = form.type.value;

    const skillModifyData = {
      title,
      value,
      color,
      type,
    };

    console.log("userModifyData", skillModifyData);
    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    try {
      await updateSkill({
        skillId: selectedSkillId,
        skillModifyData,
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
      skillRefetch();
    } catch (error) {
      // console.error("Failed to update product:", error);
    }
  };

  const handleEditFormSubmitCategory = async (event) => {
    event.preventDefault();

    const form = event.target;
    const category_title = form.title.value;

    const projectCategoryModifyData = {
      category_title,
    };

    console.log("userModifyData", projectCategoryModifyData);
    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    // console.log("Product ID:", selectedProductId);
    // console.log("Product Data:", productModifyData);

    try {
      await updateCategory({
        projectCategoryId: selectedCategoryId,
        projectCategoryModifyData,
      });
      // console.log("Product updated:", response);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Successfully Updated Product info",
        showConfirmButton: false,
        timer: 1500,
      });

      const modal = document.getElementById("editProductModalCategory");
      if (modal) {
        modal.close();
      }
      CategoryRefetch();
    } catch (error) {
      // console.error("Failed to update product:", error);
    }
  };

  // console.log(selectedProductId);

  const handleDeleteSkill = (skillId) => {
    console.log(skillId);
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
          await deleteSkill(skillId).unwrap();
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          skillRefetch();
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

  const handleDeleteCategory = (projectCategoryId) => {
    console.log(projectCategoryId);
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
          await deleteCategory(projectCategoryId).unwrap();
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          CategoryRefetch();
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
            {/* ************skill part******************* */}
            <div className="container mx-auto  ">
              <div className="flex justify-between pt-5">
                <h2 className="text-2xl text-black font-semibold pl-7">
                  Skill Management
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
                  <span>Add Skill</span>
                </button>
                <dialog id="AddProductModal" className="modal  ">
                  <div className="modal-box bg-[#1A4870]  ">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    {/* add car form */}
                    <form onSubmit={handleAddSkill}>
                      <div className="flex justify-center pt-5 ">
                        <h1 className="text-white text-3xl ">Add New Skill</h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        <div>
                          <label className="pr-16 text-white">Title:</label>
                          <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-16 text-white"> Value:</label>
                          <input
                            type="number"
                            required
                            name="value"
                            min={0}
                            max={100}
                            placeholder="Enter user email  "
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-3 text-white">Color Code:</label>
                          <input
                            type="text"
                            name="color"
                            placeholder="Enter image Link (Link only)"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>

                        <div>
                          <label className="pr-10 text-white">Type:</label>
                          <select
                            name="type"
                            required
                            className="select select-bordered w-full max-w-60 bg-[#1A4870] text-white"
                          >
                            <option value="" disabled>
                              Select Skill Category
                            </option>
                            <option value="othersSkill">othersSkill</option>
                            <option value="programmingSkill">
                              programmingSkill
                            </option>
                            <option value="softSkill">softSkill</option>
                          </select>
                        </div>

                        <div className="flex justify-center my-5  ">
                          <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                            Save
                          </button>
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
                          {selectedSkillId ? "Edit User" : "Add New User"}
                        </h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        {selectedSkillId && (
                          <div className="text-white text-center mb-4">
                            <p>User ID: {selectedSkillId}</p>
                          </div>
                        )}
                        <div>
                          <label className="pr-16 text-white">Title:</label>
                          <input
                            type="text"
                            name="title"
                            defaultValue={selectedSkill?.title}
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-16 text-white">Value:</label>
                          <input
                            type="text"
                            defaultValue={selectedSkill?.value}
                            name="value"
                            placeholder="Enter user email"
                            className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-3 text-white">Color Code:</label>
                          <input
                            type="text"
                            defaultValue={selectedSkill?.color}
                            name="color"
                            placeholder="Enter image Link (Link only)"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>
                        <div>
                          <label className="pr-10 text-white">Type:</label>
                          <select
                            name="type"
                            defaultValue={selectedSkill?.type}
                            className="select select-bordered w-full max-w-60 bg-[#1A4870] text-white"
                          >
                            <option value="" disabled>
                              Select Skill Category
                            </option>
                            <option value="othersSkill">othersSkill</option>
                            <option value="programmingSkill">
                              programmingSkill
                            </option>
                            <option value="softSkill">softSkill</option>
                          </select>
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
                      <th>Title</th>
                      <th>Value</th>
                      <th>Color</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {skills.length === 0 ? (
                      <div>sorry</div>
                    ) : (
                      skills.map((user) => (
                        <>
                          <tr key={user._id} className="hover:bg-gray-300">
                            <td>
                              <div className="flex items-center gap-3  ">
                                <div className="avatar"></div>
                                <div>
                                  <div className="font-semibold">
                                    {user.title}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <div className="font-semibold">
                                  {user.value}%
                                </div>
                              </div>
                            </td>
                            <td>
                              <div>
                                <div className="font-semibold">
                                  {user.color}
                                </div>
                              </div>
                            </td>

                            <th>
                              <div className="space-x-0">
                                <button
                                  onClick={() => handleEditSkill(user._id)}
                                  className="btn btn-ghost btn-sm  "
                                >
                                  <GrTransaction className="w-6 h-6 " />
                                </button>
                                <button
                                  onClick={() => handleDeleteSkill(user._id)}
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
            {/* ************skill part******************* */}
            {/* ********************************************************************************************** */}
            {/* ************projectCategory part******************* */}
            <div className="container mx-auto  ">
              <div className="flex justify-between pt-5">
                <h2 className="text-2xl text-black font-semibold pl-7">
                  Project Category Management
                </h2>

                <button
                  onClick={() => {
                    const modal = document.getElementById(
                      "AddProductModalCategory"
                    );
                    if (modal) {
                      modal.showModal();
                    }
                  }}
                  className="flex text-white btn bg-[#1A4870] hover:bg-[#5B99C2] btn-md justify-between  "
                >
                  <span>
                    <IoAddCircleOutline className="w-6 h-7" />
                  </span>
                  <span>Add Category</span>
                </button>
                <dialog id="AddProductModalCategory" className="modal  ">
                  <div className="modal-box bg-[#1A4870]  ">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    {/* add car form */}
                    <form onSubmit={handleAddCategory}>
                      <div className="flex justify-center pt-5 ">
                        <h1 className="text-white text-3xl ">
                          Add New Project Category
                        </h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        <div>
                          <label className="pr-16 text-white">
                            Category Title:
                          </label>
                          <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-60 bg-inherit text-white"
                          />
                        </div>

                        <div className="flex justify-center my-5  ">
                          <button className="flex text-white btn hover:bg-[#1A4870] bg-[#5B99C2] btn-md justify-center w-full text-2xl pb-1 ">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                    {/* add car form */}
                  </div>
                </dialog>
                {/* edit modal */}
                <dialog id="editProductModalCategory" className="modal">
                  <div className="modal-box bg-[#1A4870]">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <form onSubmit={handleEditFormSubmitCategory}>
                      <div className="flex justify-center pt-5 ">
                        <h1 className="text-white text-3xl ">
                          {selectedCategoryId ? "Edit User" : "Add New User"}
                        </h1>
                      </div>
                      <p className="border border-1 border-gray-400 my-3 "></p>
                      <div className="flex flex-col gap-2">
                        {selectedCategoryId && (
                          <div className="text-white text-center mb-4">
                            <p>User ID: {selectedCategoryId}</p>
                          </div>
                        )}
                        <div>
                          <label className="pr-16 text-white">
                            Category Title:
                          </label>
                          <input
                            type="text"
                            name="title"
                            defaultValue={selectedCategory?.category_title}
                            placeholder="Enter user name"
                            className="input input-bordered input-primary w-full max-w-xs bg-inherit text-white"
                          />
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
                      <th>Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {categorys.length === 0 ? (
                      <div>sorry</div>
                    ) : (
                      categorys.map((user) => (
                        <>
                          <tr key={user._id} className="hover:bg-gray-300">
                            <td>
                              <div className="flex items-center gap-3  ">
                                <div className="avatar"></div>
                                <div>
                                  <div className="font-semibold">
                                    {user.category_title}
                                  </div>
                                </div>
                              </div>
                            </td>

                            <th>
                              <div className="space-x-0">
                                <button
                                  onClick={() => handleEditCategory(user._id)}
                                  className="btn btn-ghost btn-sm  "
                                >
                                  <GrTransaction className="w-6 h-6 " />
                                </button>
                                <button
                                  onClick={() => handleDeleteCategory(user._id)}
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
            {/* ************projectCategory part******************* */}
            {/* All operation is here */}
            {/* All operation is here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSkill;
