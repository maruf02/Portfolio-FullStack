import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // GetAllUser: builder.query({
    //   query: () => ({
    //     url: "/auth/users",
    //     method: "GET",
    //   }),
    // }),
    signUpUser: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),

    changePassword: builder.mutation({
      query: (payload) => ({
        url: "/change-password",
        method: "POST",
        body: payload,
      }),
    }),
    updatePassword: builder.mutation({
      query: (payload) => ({
        url: "/update-password",
        method: "PUT",
        body: payload,
      }),
    }),
    GetAllUser: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    GetUserEmail: builder.query({
      query: (email: string) => ({
        url: `/users/email/${email}`,
        method: "GET",
      }),
    }),
    GetUserByUserId: builder.query({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "GET",
      }),
    }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/auth/signup",
        method: "POST",
        body: userData,
      }),
    }),

    updateUser: builder.mutation({
      query: ({ userId, userModifyData }) => ({
        url: `/users/${userId}`,
        method: "PUT",
        body: userModifyData,
      }),
    }),
    deleteUser: builder.mutation({
      query: (userId: string) => ({
        url: `/users/${userId}`,
        method: "DELETE",
      }),
    }),
    // ***************************************
    addSkill: builder.mutation({
      query: (skillInfo) => ({
        url: "/skills",
        method: "POST",
        body: skillInfo,
      }),
    }),
    addprojectCategory: builder.mutation({
      query: (projectCategoryInfo) => ({
        url: "/projectCategory",
        method: "POST",
        body: projectCategoryInfo,
      }),
    }),

    GetSkillsByType: builder.query({
      query: ({ type }) => ({
        url: `/${type}`,
        method: "GET",
      }),
    }),
    GetAllSkills: builder.query({
      query: () => ({
        url: "/getAllSkill",
        method: "GET",
      }),
    }),
    GetAllProjectCategory: builder.query({
      query: () => ({
        url: "/category/projectCategory",
        method: "GET",
      }),
    }),

    updateSkill: builder.mutation({
      query: ({ skillId, skillModifyData }) => ({
        url: `/skills/${skillId}`,
        method: "PUT",
        body: skillModifyData,
      }),
    }),
    updateProjectCategory: builder.mutation({
      query: ({ projectCategoryId, projectCategoryModifyData }) => ({
        url: `/projectCategory/${projectCategoryId}`,
        method: "PUT",
        body: projectCategoryModifyData,
      }),
    }),
    deleteSkill: builder.mutation({
      query: (skillId: string) => ({
        url: `/skills/${skillId}`,
        method: "DELETE",
      }),
    }),
    deleteProjectCategory: builder.mutation({
      query: (projectCategoryId: string) => ({
        url: `/projectCategory/${projectCategoryId}`,
        method: "DELETE",
      }),
    }),
    // ***************************************
    // ***************************************
    addproject: builder.mutation({
      query: (projectInfo) => ({
        url: "/project",
        method: "POST",
        body: projectInfo,
      }),
    }),
    GetProjectByType: builder.query({
      query: ({ type }) => ({
        url: `/${type}`,
        method: "GET",
      }),
    }),

    GetAllProject: builder.query({
      query: () => ({
        url: "/project/allProject",
        method: "GET",
      }),
    }),
    GetAllProjectById: builder.query({
      query: ({ id }) => ({
        url: `/project/${id}`,
        method: "GET",
      }),
    }),
    updateProject: builder.mutation({
      query: ({ projectId, projectModifyData }) => ({
        url: `/project/${projectId}`,
        method: "PUT",
        body: projectModifyData,
      }),
    }),

    deleteProject: builder.mutation({
      query: (projectId: string) => ({
        url: `/project/${projectId}`,
        method: "DELETE",
      }),
    }),

    // ***************************************
    // ***************************************
    addBlog: builder.mutation({
      query: (blogInfo) => ({
        url: "/Blog",
        method: "POST",
        body: blogInfo,
      }),
    }),

    GetAllBlog: builder.query({
      query: () => ({
        url: "/Blog/allBlog",
        method: "GET",
      }),
    }),
    GetAllBlogById: builder.query({
      query: ({ id }) => ({
        url: `/Blog/${id}`,
        method: "GET",
      }),
    }),
    updateBlog: builder.mutation({
      query: ({ blogId, blogModifyData }) => ({
        url: `/Blog/${blogId}`,
        method: "PUT",
        body: blogModifyData,
      }),
    }),

    deleteBlog: builder.mutation({
      query: (projectId: string) => ({
        url: `/Blog/${projectId}`,
        method: "DELETE",
      }),
    }),

    // ***************************************
    // forgotPassword: builder.mutation({
    //   query: (emailInfo) => ({
    //     url: "/forgot-password",
    //     method: "POST",
    //     body: emailInfo,
    //   }),
    // }),
    forgotPassword: builder.mutation({
      query: (emailInfo) => ({
        url: "/forgot-password",
        method: "POST",
        body: { ...emailInfo }, // Spread emailInfo to send all properties
      }),
    }),
    // ***************************************
  }),
});

export const {
  useGetUserEmailQuery,
  useGetAllUserQuery,
  useSignUpUserMutation,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useChangePasswordMutation,
  useGetUserByUserIdQuery,
  useUpdatePasswordMutation,
  // ****************************,
  useAddSkillMutation,
  useAddprojectCategoryMutation,
  useGetSkillsByTypeQuery,
  useGetAllSkillsQuery,
  useGetAllProjectCategoryQuery,
  useUpdateSkillMutation,
  useUpdateProjectCategoryMutation,
  useDeleteSkillMutation,
  useDeleteProjectCategoryMutation,
  // ****************************
  useAddprojectMutation,
  useUpdateProjectMutation,
  useGetAllProjectQuery,
  useGetAllProjectByIdQuery,
  useGetProjectByTypeQuery,
  useDeleteProjectMutation,
  // *****************
  useAddBlogMutation,
  useGetAllBlogByIdQuery,
  useGetAllBlogQuery,
  useDeleteBlogMutation,
  // *******************
  useForgotPasswordMutation,
} = authApi;
