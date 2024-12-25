import React, { useEffect } from "react";
import "./MyTeamSection.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsSkype,
} from "react-icons/bs";
// for back to top js code
// for back to top js code

const MyTeamSection = () => {
  useEffect(() => {
    let mybutton = document.getElementById("myBtn");

    window.onscroll = function () {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    mybutton.addEventListener("click", () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }, []);
  return (
    <div>
      <section className="bg-[#1D1B34] w-full h-fit lg:h-[700px] lg:pb-40 ">
        <section className=" mx-auto w-full  pt-10 pb-5">
          <h1 className="text-[#79d2a6] text-6xl text-center font-f font-bold ">
            My Team
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-3/12 mx-auto"></p>
          <h1 className="text-[#39604c] text-xl text-center font-f font-bold pt-3">
            For Client Requirement we are together
          </h1>
          <p className="border-b-4 border-double border-[#39604c] w-3/4 md:w-4/12 lg:w-4/12 mx-auto"></p>
        </section>
        <section className="container mx-auto h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 ">
          {/*team card  */}
          {/*team card-1  */}
          <div className="TeamCard bg-[#ffffff10] w-[300px] h-[410px] rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex items-center justify-center mt-5">
              <div className="rounded-full p-2 border-4 border-solid border-white">
                <img
                  className="rounded-full h-52 w-52 object-cover"
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/marfatAV.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#79d2a6] text-4xl font-f font-bold  pt-4">
                Marfat Islam
              </p>
              <p className="text-[#79d2a6] text-xl font-f font-bold  pt-1">
                Font-end Developer
              </p>
              <div className="mx-auto   container  text-center justify-center flex gap-4 ">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <a href="#">
                      <BsFacebook className="text-2xl"></BsFacebook>
                    </a>
                  </li>
                  <li className="icon skype">
                    <span className="tooltip">Skype</span>
                    <a href="#">
                      <BsSkype className="text-2xl"></BsSkype>
                    </a>
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <a href="#">
                      <BsTwitter className="text-2xl"></BsTwitter>
                    </a>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <a href="#">
                      <BsLinkedin className="text-2xl"></BsLinkedin>
                    </a>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <a href="#">
                      <BsGithub className="text-2xl"></BsGithub>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*team card-1  */}
          {/*team card-2  */}
          <div className="TeamCard bg-[#ffffff10] w-[300px] h-[410px] rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex items-center justify-center mt-5">
              <div className="rounded-full p-2 border-4 border-solid border-white">
                <img
                  className="rounded-full h-52 w-52 object-cover"
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/masumaAV.png"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#79d2a6] text-2xl font-f font-bold  pt-4">
                MK
              </p>
              <p className="text-[#79d2a6] text-lg font-f font-bold  pt-1">
                Wordpres+Shopify Dev
              </p>
              <div className="mx-auto   container  text-center justify-center flex gap-4 ">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <a href="#">
                      <BsFacebook className="text-2xl"></BsFacebook>
                    </a>
                  </li>
                  <li className="icon skype">
                    <span className="tooltip">Skype</span>
                    <a href="#">
                      <BsSkype className="text-2xl"></BsSkype>
                    </a>
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <a href="#">
                      <BsTwitter className="text-2xl"></BsTwitter>
                    </a>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <a href="#">
                      <BsLinkedin className="text-2xl"></BsLinkedin>
                    </a>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <a href="#">
                      <BsGithub className="text-2xl"></BsGithub>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*team card-2  */}
          {/*team card-3  */}
          <div className="TeamCard bg-[#ffffff10] w-[300px] h-[410px] rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex items-center justify-center mt-5">
              <div className="rounded-full p-2 border-4 border-solid border-white">
                <img
                  className="rounded-full h-52 w-52 object-cover"
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/sagar.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#79d2a6] text-4xl font-f font-bold  pt-4">
                Sagar Paul
              </p>
              <p className="text-[#79d2a6] text-xl font-f font-bold  pt-1">
                Graphics Designer
              </p>
              <div className="mx-auto   container  text-center justify-center flex gap-4 ">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <a href="#">
                      <BsFacebook className="text-2xl"></BsFacebook>
                    </a>
                  </li>
                  <li className="icon skype">
                    <span className="tooltip">Skype</span>
                    <a href="#">
                      <BsSkype className="text-2xl"></BsSkype>
                    </a>
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <a href="#">
                      <BsTwitter className="text-2xl"></BsTwitter>
                    </a>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <a href="#">
                      <BsLinkedin className="text-2xl"></BsLinkedin>
                    </a>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <a href="#">
                      <BsGithub className="text-2xl"></BsGithub>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*team card-3  */}
          {/*team card-4  */}
          <div className="TeamCard bg-[#ffffff10] w-[300px] h-[410px] rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex items-center justify-center mt-5">
              <div className="rounded-full p-2 border-4 border-solid border-white">
                <img
                  className="rounded-full h-52 w-52 object-cover"
                  src="https://maruf02.github.io/Asset-Json-Img-dont-delete/PortfolioImage/abbas.jpg"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-[#79d2a6] text-4xl font-f font-bold  pt-4">
                Abbas Uddin
              </p>
              <p className="text-[#79d2a6] text-xl font-f font-bold  pt-1">
                Seo Expert
              </p>
              <div className="mx-auto   container  text-center justify-center flex gap-4 ">
                <ul className="wrapper">
                  <li className="icon facebook">
                    <span className="tooltip">Facebook</span>
                    <a href="#">
                      <BsFacebook className="text-2xl"></BsFacebook>
                    </a>
                  </li>
                  <li className="icon skype">
                    <span className="tooltip">Skype</span>
                    <a href="#">
                      <BsSkype className="text-2xl"></BsSkype>
                    </a>
                  </li>
                  <li className="icon twitter">
                    <span className="tooltip">Twitter</span>
                    <a href="#">
                      <BsTwitter className="text-2xl"></BsTwitter>
                    </a>
                  </li>
                  <li className="icon linkedin">
                    <span className="tooltip">Linkedin</span>
                    <a href="#">
                      <BsLinkedin className="text-2xl"></BsLinkedin>
                    </a>
                  </li>
                  <li className="icon github">
                    <span className="tooltip">Github</span>
                    <a href="#">
                      <BsGithub className="text-2xl"></BsGithub>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/*team card-4  */}
          {/*team card  */}
        </section>
        <section className="h-20"></section>
      </section>
    </div>
  );
};

export default MyTeamSection;
