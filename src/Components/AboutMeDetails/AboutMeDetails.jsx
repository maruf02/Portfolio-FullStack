import ProPicAnime from "../ProPicAnime/ProPicAnime";
import IconAnime from "../IconAnime/IconAnime";
import { FaAngleDoubleRight } from "react-icons/fa";
// import MernTypeAnime from "../BannerIntro/MernTypeAnime";

const AboutMeDetails = () => {
  return (
    <div>
      <section className="">
        <section className="text-center lg:text-left lg:pt-20">
          <h1 className="text-[#1affc6] text-6xl  font-f font-bold pb-5">
            About Me
          </h1>
          <h3 className="textDev text-[#79d2a6] text-2xl lg:text-3xl  font-f font-semibold pb-5">
            MERN Stack Developer
          </h3>
          <p className="text-[#669999] text-base text-justify px-2">
            Hi, I'm Md. Rashiduzzaman. As a web developer, I am a perpetual
            explorer of the digital realm, driven by an unquenchable curiosity
            and an insatiable appetite for innovation. My journey in web
            development began with an insatiable fascination for technology's
            power to transform ideas into reality. Over the years, I've honed my
            skills in a multitude of programming languages, frameworks, and
            tools, equipping me with the versatility to tackle a wide range of
            projects. Web development, to me, is not just a profession; it's a
            constant voyage of discovery and self-improvement. I embrace
            challenges as opportunities to expand my knowledge and push the
            boundaries of what's possible. I'm excited about the potential of
            technology to shape the future and am dedicated to being at the
            forefront of this digital revolution. Collaborative, adaptable, and
            always eager to learn, I'm enthusiastic about contributing my skills
            to projects that make a difference and create a better online world
            for all.
          </p>
          <h3 className="textDev text-[#79d2a6] text-2xl underline lg:text-3xl pt-8 font-f font-semibold pb-5">
            Education:
          </h3>
          <h3 className="textDev text-[#79d2a6] text-2xl  lg:text-3xl font-f font-semibold pl-0 ">
            BSc In CSE
          </h3>
          <h3 className=" text-[#79d2a6] text-lg  lg:text-lg font-f  font-semibold pb-5 hidden md:block pl-0 ">
            Bangladesh University Of Business and Technology (BUBT)
          </h3>
          <h3 className="textDev text-[#79d2a6] text-sm  lg:text-lg   font-f font-semibold pb-5 flex md:hidden  pl-5">
            <FaAngleDoubleRight className="mt-1" /> Bangladesh University Of
            <br />
            Business and Technology (BUBT)
          </h3>

          <IconAnime></IconAnime>
          {/* icon section */}
          <div className="w-48 h-fit  text-center  rounded-full mt-5  mx-auto  lg:mx-0">
            <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-2 left-2">
              <button
                className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[153px] rounded-[50px]
                          hover:bg-lime-500"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                See more
              </button>
            </div>
            {/* <!-- pop up box model start #071B27--> */}

            <dialog id="my_modal_1" className="modal ">
              <div className="modal-box bg-[#071B27]">
                {/* <!-- pop up inside style start --> */}
                <div className="container mx-auto">
                  {/* <!-- about me inside pop up --> */}
                  <h1 className="text-[#1affc6] text-4xl md:text-6xl fixed sticky top-0 z-50 font-f font-bold pb-5">
                    About Me
                  </h1>
                  <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-11/12 lg:w-11/12 mx-auto  "></p>
                  {/* <!-- image anime inside pop up --> */}
                  <ProPicAnime></ProPicAnime>
                  {/* <!-- image anime inside pop up --> */}
                  <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-11/12 lg:w-11/12 mx-auto mt-0 md:mt-0 lg:mt-24 "></p>
                  {/* <!-- description about me inside pop up --> */}
                  <div className="pt-10">
                    <p className="text-[#669999] text-base text-justify px-2">
                      Hi, I'm Md. Rashiduzzaman.As a web developer, I am a
                      perpetual explorer of the digital realm, driven by an
                      unquenchable curiosity and an insatiable appetite for
                      innovation. My journey in web development began with an
                      insatiable fascination for technology's power to transform
                      ideas into reality. Over the years, I've honed my skills
                      in a multitude of programming languages, frameworks, and
                      tools, equipping me with the versatility to tackle a wide
                      range of projects. Web development, to me, is not just a
                      profession; it's a constant voyage of discovery and
                      self-improvement. I embrace challenges as opportunities to
                      expand my knowledge and push the boundaries of what's
                      possible. I'm excited about the potential of technology to
                      shape the future and am dedicated to being at the
                      forefront of this digital revolution. Collaborative,
                      adaptable, and always eager to learn, I'm enthusiastic
                      about contributing my skills to projects that make a
                      difference and create a better online world for all.
                    </p>
                  </div>
                  {/* <!-- description about me inside pop up --> */}
                </div>

                {/* <!-- pop up inside style ends --> */}
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            {/* <!-- pop up box model ends --> */}
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMeDetails;
