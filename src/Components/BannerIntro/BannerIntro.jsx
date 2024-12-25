import IconAnime from "../IconAnime/IconAnime";
// import MernTypeAnime from "./MernTypeAnime";

const BannerIntro = () => {
  return (
    <div>
      <section className="">
        <div className="text-5xl font-bold text-white text-center lg:text-left pt-0 lg:pt-24 pb-4 ">
          Maruf
        </div>
        <div className="   text-xl text-center lg:text-left font-extralight text-gray-300 pb-2">
          Md Rashiduzzaman
        </div>
        <div className=" textDev text-xl text-center lg:text-left font-extralight text-gray-300 pb-2">
          Full Stack Developer
        </div>
        <hr className=" w-11/12 lg:w-8/12 lg:justify-start h-2 pb-6 mx-auto lg:mx-0" />
        <div className=" w-11/12 text-sm text-center lg:text-left font-thin text-gray-300 pb-4">
          Innovative Full Stack Developer with a passion for creating seamless
          web applications. Skilled in front-end and back-end technologies,
          ready to take on new challenges.
        </div>
        <div className="outer relative  h-12 w-80 rounded-[50px] mt-3 -top-2 left-2">
          <button
            className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[315px] rounded-[50px]
                          hover:bg-lime-500"
          >
            <a href="mailto:rashiduzzaman99@gmail.com">Lets Work Together</a>
          </button>
        </div>
        <div className="outer relative flex flex-row h-12 w-80 rounded-[50px] mt-3 -top-2 left-2">
          <button
            className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-lg z-[9] tracking-[1px]  cursor-pointer h-[44px] w-[315px] rounded-[50px]
                          hover:bg-lime-500"
          >
            <a
              href="https://drive.google.com/file/d/1fwlvMVwl5oH1FB0R0fNwYh9mbATtyz4J/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </button>
        </div>
        {/* banner intro icon list */}
        {/* banner intro icon list */}

        <IconAnime></IconAnime>
        {/* <!-- draw line for mobile --> */}
        <p className="border-b-2 my-6 w-11/12 mx-auto md:hidden"></p>
      </section>
    </div>
  );
};

export default BannerIntro;
