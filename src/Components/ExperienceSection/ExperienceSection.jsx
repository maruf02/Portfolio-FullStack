import { useEffect } from "react";
import "./MyTeamSection.css";

// for back to top js code
// for back to top js code

const ExperienceSection = () => {
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
            My Experience
          </h1>
          <p className="border-b-4 border-double border-[#79d2a6] w-3/4 md:w-4/12 lg:w-4/12 mx-auto"></p>
        </section>
        <section className="container mx-auto h-full  flex flex-col md:flex-row flex-wrap justify-center  gap-10 ">
          {/*team card  */}
          {/*team card-1  */}
          <div className="TeamCard bg-[#ffffff10] w-[370px] h-[460px]  rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex flex-col items-left pl-5">
              <p className="text-[#79d2a6] text-4xl  font-bold  pt-4">
                Company: Isharify Ltd.
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Designation: IT Executive(PM)
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Duration: 14-10-2020 -- 31-12-2024
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Type: Amazon, e-Bay, product listing & optimize
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1 ">
                Responsibility:
                <ul className="text-[#79d2a6] text-lg   font-bold  pt-1 list-disc pl-5">
                  <li> Meeting with client and understand project Procedure</li>
                  <li>Work on Project task</li>
                </ul>
              </p>
            </div>
          </div>
          {/*team card-1  */}
          {/*team card-2  */}
          <div className="TeamCard bg-[#ffffff10] w-[370px] h-[460px] rounded-2xl cursor-pointer ml-10 mt-10">
            <div className="flex flex-col items-left pl-5">
              <p className="text-[#79d2a6] text-4xl  font-bold  pt-4">
                Company: Ted Bernhardtz Group
              </p>

              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Designation: Software Manager
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Duration: Contractual(01-01-2020-30-08-2020)
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Type: Buying House(Textile)
              </p>
              <p className="text-[#79d2a6] text-xl   font-bold  pt-1">
                Responsibility:
                <ul className="text-[#79d2a6] text-lg   font-bold  pt-1 list-disc pl-5">
                  <li> Collaborate software team.</li>
                  <li> Collect & understand all system of this company.</li>
                  <li>
                    After that discuss and check from responsible Software
                    company.
                  </li>
                  <li>Entry all type of previous data that system.</li>
                </ul>
              </p>
            </div>
          </div>
          {/*team card-2  */}

          {/*team card  */}
        </section>
        <section className="h-20"></section>
      </section>
    </div>
  );
};

export default ExperienceSection;
