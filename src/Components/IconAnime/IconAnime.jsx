import React from "react";
import "./IconAnime.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsGithub,
  BsSkype,
} from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

const IconAnime = () => {
  return (
    <div>
      <div className="container mx-auto pt-6 h-full  md:-ml-12 lg:-ml-8 xl:-ml-24 text-center justify-center flex flex-wrap gap-2   lg:gap-4 ">
        <ul className="wrapper">
          <li className="icon facebook">
            <span className="tooltip">Facebook</span>
            <a href="https://www.facebook.com/Sargas.k20/" target="_blank">
              <BsFacebook className="text-2xl"></BsFacebook>
            </a>
          </li>
          <li className="icon linkedin">
            <span className="tooltip">Linkedin</span>
            <a href="https://www.linkedin.com/in/marufk20/" target="_blank">
              <BsLinkedin className="text-2xl"></BsLinkedin>
            </a>
          </li>
          <li className="icon skype">
            <span className="tooltip">Skype</span>
            <a
              href="https://join.skype.com/invite/VbRAKre1o36g"
              target="_blank"
            >
              <BsSkype className="text-2xl"></BsSkype>
            </a>
          </li>
          <li className="icon github">
            <span className="tooltip">Github</span>
            <a href="https://github.com/maruf02" target="_blank">
              <BsGithub className="text-2xl"></BsGithub>
            </a>
          </li>
        </ul>
      </div>
      <div className="container mx-auto  h-full  md:-ml-12 lg:-ml-8 xl:-ml-24 text-center justify-center flex flex-wrap gap-2   lg:gap-4 ">
        <ul className="wrapper">
          <li className="icon fiverr">
            <span className="tooltip">Fiverr</span>
            <a href="#">
              <TbBrandFiverr className="text-2xl"></TbBrandFiverr>
            </a>
          </li>
          <li className="icon skype">
            <span className="tooltip">Upwork</span>
            <a href="#">
              <SiUpwork className="text-2xl"></SiUpwork>
            </a>
          </li>
          <li className="icon instagram">
            <span className="tooltip">Instagram</span>
            <a href="https://www.instagram.com/sargas.k20/" target="_blank">
              <BsInstagram className="text-2xl"></BsInstagram>
            </a>
          </li>
          <li className="icon twitter">
            <span className="tooltip">Twitter</span>
            <a href="https://twitter.com/Marufk20" target="_blank">
              <BsTwitter className="text-2xl"></BsTwitter>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default IconAnime;
