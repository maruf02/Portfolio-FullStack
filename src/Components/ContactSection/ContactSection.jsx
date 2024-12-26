import React, { useState } from "react";
import "./ContactSection.css";
import IconAnime from "../IconAnime/IconAnime";
import emailjs from "emailjs-com";
import { useForgotPasswordMutation } from "../../Redux/features/user/userApi";
import Swal from "sweetalert2";

const ContactSection = () => {
  // const [email, setEmail] = useState("");
  const [forgotPassword] = useForgotPasswordMutation();

  const sendEmail = async (e) => {
    e.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const message = form.message.value;

    const emailInfo = { name, email, number, message };
    // setEmail(email);

    console.log("email", emailInfo);
    try {
      // Trigger the forgot password mutation
      await forgotPassword(emailInfo).unwrap();

      Swal.fire({
        title: "Success!",
        text: "Thanks, For contact me.i will contact you very soon",
        icon: "success",
      });
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Email not found, please try again.",
        icon: "error",
      });
    }
    // Use your own Service ID, Template ID, and User ID from EmailJS
    // emailjs
    //   .sendForm(
    //     "service_91gi2yv",
    //     "template_pcj3rxg",
    //     e.target,
    //     "btalU--XqJ6nznuQE"
    //   )
    //   .then(
    //     (result) => {
    //       console.log("Email successfully sent:", result.text);
    //       // Optionally, you can add logic here to handle successful email sending
    //     },
    //     (error) => {
    //       console.error("Email sending failed:", error.text);
    //       // Optionally, you can add logic here to handle failed email sending
    //     }
    //   );
  };

  return (
    // <div>
    //   <h1>Contact Me</h1>
    //   <form onSubmit={sendEmail}>
    //     <label>
    //       Your Name:
    //       <input type="text" name="name" required />
    //     </label>
    //     <br />
    //     <label>
    //       Your Email:
    //       <input type="email" name="email" required />
    //     </label>
    //     <br />
    //     <label>
    //       Message:
    //       <textarea name="message" required></textarea>
    //     </label>
    //     <br />
    //     <button type="submit">Send</button>
    //   </form>
    // </div>
    <div>
      <section className="  bg-[#1D1B34] w-full h-fit lg:h-fit  ">
        <section className=" mx-auto w-full  pt-10 pb-5">
          <h1 className="text-[#79d2a6] text-5xl md:text-6xl text-center font-f font-bold ">
            Contant Me
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-7/12 lg:w-4/12 mx-auto"></p>
        </section>
        <section className="container mx-auto flex flex-col lg:flex-row gap-4  ">
          <section className=" h-fit lg:w-1/3 lg:pt-32 lg:pl-40  justify-center">
            <IconAnime></IconAnime>
          </section>
          <section className=" px-4 h-fit w-full lg:w-2/3 pt-10 pb-10 md:pb-12">
            <div className="contact-right">
              <form onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  id=""
                  required
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  id=""
                  required
                  placeholder="Your Email"
                />
                <input
                  type="number"
                  name="number"
                  id=""
                  required
                  placeholder="Your Number"
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  required
                  placeholder="Your Comment"
                ></textarea>
                <div className="mx-auto flex justify-center">
                  <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-2 left-2 ">
                    <button
                      className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[155px] rounded-[50px]
                          hover:bg-lime-500 "
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </div>
                {/* <button className="btn btn-primary" type="submit">
                  Send
                </button> */}
              </form>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ContactSection;
