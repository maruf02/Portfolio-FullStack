import React from "react";

const ServiceSection = () => {
  return (
    <div>
      <section className="bg-[#2B2B5F] w-full h-[750px] lg:h-[650px] pb-20 ">
        <section className=" mx-auto w-full  pt-10 pb-5">
          <h1 className="text-[#79d2a6] text-6xl text-center font-f font-bold ">
            Services
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-2/12 mx-auto"></p>
        </section>
        <section className="container mx-auto h-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {/* <!-- 1 --> */}
          <section className="bg-[#1A083D]  border-4 border-double border-[#79d2a6] h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 rotate-45  text-center  relative left-44 top-10 md:top-20 md:left-20 lg:top-16 lg:left-44 ">
            <p className="text-[#79d2a6] text-2xl lg:text-3xl font-f font-bold mt-[40%] -rotate-45 relative -top-6">
              WEB DESIGN (API)
            </p>
          </section>
          {/* <!-- 2 --> */}
          <section className="bg-[#1A083D] border-4 border-double border-[#79d2a6] h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52  text-center rotate-45 relative left-10 lg:top-56 md:top-10 lg:left-16">
            <p className="text-[#79d2a6] text-lg lg:text-2xl font-f font-bold mt-[40%] -rotate-45 relative -top-4 -left-4 md:-left-2 md:-top-4">
              WEB DEVELOPMENT (API)
            </p>
          </section>
          {/* <!-- 3 --> */}
          <section className=" bg-[#1A083D] border-4 border-double border-[#79d2a6] h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52  text-center rotate-45 relative left-44 -top-10 lg:top-16 lg:-left-10">
            <p className="text-[#79d2a6] text-lg lg:text-2xl font-f font-bold mt-[40%] -rotate-45">
              WORDPRESS
            </p>
          </section>
          {/* <!-- 4 --> */}
          <section className=" bg-[#1A083D] border-4 border-double border-[#79d2a6] h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52  text-center rotate-45 relative left-10 -top-20 md:top-6 lg:top-48 lg:-left-28">
            <p className="text-[#79d2a6] text-3xl font-f font-bold mt-[40%] -rotate-45">
              SEO
            </p>
          </section>
        </section>
      </section>
    </div>
  );
};

export default ServiceSection;
