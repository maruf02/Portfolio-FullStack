import React, { useState } from "react";
import NavBarMobile from "../../NavBarDashBoard/NavBarMobile";
import NavBarDashBoard from "../../NavBarDashBoard/NavBarDashBoard";
import Swal from "sweetalert2";
import { Button, Modal, Select, Space, Spin } from "antd";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  useAddBlogMutation,
  useDeleteBlogMutation,
  useGetAllBlogQuery,
} from "../../../Redux/features/user/userApi";
import { MdDeleteForever } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";

const ManageBlog = () => {
  const [editorContent, setEditorContent] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(false);
  const [createPost] = useAddBlogMutation();
  const { data: blog, refetch } = useGetAllBlogQuery(undefined);
  const [open, setOpen] = useState(false);
  const [deleteProject] = useDeleteBlogMutation();
  const blogs = blog?.data || [];

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleFileChange = (event) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const uploadImageToCloudinary = async () => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "frontend_preset");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dnsqmhk8i/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      return null;
    }
  };

  const validateFields = () => {
    if (!editorContent.trim()) {
      Swal.fire("Editor content is required!");
      return false;
    }

    if (!file) {
      alert("Please upload an image!");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!validateFields()) {
      return;
    }

    setLoading(true);

    let imageUrl = "";
    if (file) {
      imageUrl = await uploadImageToCloudinary();
    }

    const postData = {
      bolg_title: title,
      Content: editorContent,
      img: imageUrl || "",
    };

    console.log(postData, postData);

    try {
      const result = await createPost(postData).unwrap();
      console.log("Post created successfully", result);
      Swal.fire("Post created successfully");
      refetch();
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.error("Failed to create post:", error);
      setLoading(false);
    }
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    handleSubmit();
  };

  const handleCancel = () => {
    setOpen(false);
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
          refetch();
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
          <div className="w-full  h-full container mx-auto ">
            {/* All operation is here */}
            {/* All operation is here */}
            <div className="w-full   h-fit   mt-5   ">
              <div className="w-2/4 mx-auto mb-4">
                <Button
                  type="primary"
                  onClick={showModal}
                  className="w-full btn-lg text-4xl bg-slate-400"
                >
                  Create a New Blog
                </Button>
              </div>

              <Modal
                title="Create New Post"
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Submit"
                cancelText="Cancel"
                width={1000}
                okButtonProps={{
                  style: { backgroundColor: "blue" },
                }}
              >
                {loading ? (
                  <div className="flex justify-center items-center">
                    <Spin size="large" />
                  </div>
                ) : (
                  <>
                    <div className="w-full flex flex-row items-center  gap-0 py-5">
                      <label className="text-xl pr-5">Blog Title:</label>
                      <input
                        type="text"
                        name="title"
                        placeholder="Type here"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="input input-bordered input-primary w-10/12   bg-transparent"
                      />
                    </div>
                    <div className="w-full  h-40 ">
                      <label className="text-xl py-2">Content:</label>
                      <ReactQuill
                        theme="snow"
                        value={editorContent}
                        onChange={handleEditorChange}
                        className="bg-white border rounded-md min-h-32 h-40 w-full"
                        placeholder="Write something about yourself..."
                      />
                    </div>

                    <div className="flex gap-5 border w-full h-16 mt-20">
                      <div className="flex items-center">
                        <input
                          type="file"
                          className="file-input w-full max-w-xs items-center bg-transparent"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </>
                )}
              </Modal>
            </div>
            {/* ************************************************************* */}
            {/* ************************************************************* */}
            {/* table view */}
            <div className="container mx-auto overflow-x-auto pb-5 w-full max-w-4xl">
              <table className="table w-full ">
                {/* head */}
                <thead className="text-black text-lg">
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {blogs.length === 0 ? (
                    <div>sorry</div>
                  ) : (
                    blogs.map((user) => (
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
                                  {user.bolg_title}
                                </div>
                              </div>
                            </div>
                          </td>

                          <th>
                            <div className="space-x-0">
                              {/* <button
                                // onClick={() => handleEditProject(user._id)}
                                className="btn btn-ghost btn-sm  "
                              >
                                <GrTransaction className="w-6 h-6 " />
                              </button> */}
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
            {/* ************************************************************* */}
            {/* All operation is here */}
            {/* All operation is here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBlog;
