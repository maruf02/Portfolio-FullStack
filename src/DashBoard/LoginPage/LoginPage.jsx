import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../Redux/hooks";
import { useState } from "react";
import { useGetUserEmailQuery } from "../../Redux/features/user/userApi";
import { useLoginMutation } from "../../Redux/features/auth/authApi";
import { verifyToken } from "../../Redux/verifyToken";
import { setUser } from "../../Redux/features/auth/authSlice";
import Swal from "sweetalert2";
import { Form, Input } from "antd";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const { data: userData, isError } = useGetUserEmailQuery(email);
  const [login] = useLoginMutation();

  const handleLogin = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // const userInfo = {
    //   email: data.email,
    //   password: data.password,
    // };
    const userInfo = { email, password };

    try {
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken);
      const { role } = user;
      //   console.log("User data:", role);
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${role}`);
    } catch (err) {
      const error = err;
      if (error.data?.message) {
        // console.error("Login error:", err.data.message);
        Swal.fire("Error", error.data.message, "error");
      } else {
        // console.error("Login error:", err);
        Swal.fire("Error", "An unexpected error occurred.", "error");
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
        <main className="mt-0 transition-all duration-200 ease-soft-in-out">
          <section>
            <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
              <div className="container z-10">
                <div className="flex flex-wrap mt-0 -mx-3">
                  <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                    <div className="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                      <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                        <h3 className="relative z-10 font-bold text-transparent bg-gradient-to-tl from-blue-600 to-cyan-400 bg-clip-text">
                          Welcome back
                        </h3>
                        <p className="mb-0">
                          Enter your email and password to sign in
                        </p>
                      </div>
                      <div className="flex-auto p-6">
                        {/* sign in form start */}

                        <form onSubmit={handleLogin}>
                          <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                            Email
                          </label>
                          <div className="mb-4">
                            <input
                              type="email"
                              name="email"
                              required
                              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                              placeholder="Enter Your Email"
                            />
                          </div>
                          <label className="mb-2 ml-1 font-bold text-xs text-slate-700">
                            Password
                          </label>
                          {/* <div className="mb-4">
                            <input
                              type="password"
                              name="password"
                              className="focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow"
                              placeholder="Password"
                            />
                          </div> */}

                          <Form.Item
                            // label="Password"
                            name="password"
                            rules={[
                              {
                                required: true,
                                message: "Please input your password!",
                              },
                            ]}
                          >
                            <Input.Password />
                          </Form.Item>

                          <div className="text-center">
                            <button className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
                              Sign in
                            </button>
                          </div>
                        </form>
                        {/* <div className="text-center">
                          <button className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-xs ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85">
                            Sign in
                          </button>
                        </div> */}
                        {/* </form> */}
                        {/* sign in form start */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* **************************************************** */}
      </div>
    </div>
  );
};

export default LoginPage;
