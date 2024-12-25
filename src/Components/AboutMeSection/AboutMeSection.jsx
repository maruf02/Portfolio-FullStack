import ProPicAnime from "../ProPicAnime/ProPicAnime";
import AboutMeDetails from "../AboutMeDetails/AboutMeDetails";

const AboutMeSection = () => {
  return (
    <div>
      <section className="bg-[#071B27] w-full pb-10  ">
        <section className="container mx-auto h-full  grid lg:grid-cols-2 lg:gap-5">
          {/* <!-- about left side start --> */}
          <ProPicAnime></ProPicAnime>
          {/* <!-- about left side ends --> */}
          {/* <!-- **************************************************************** --> */}
          {/* <!-- about right side start --> */}
          <AboutMeDetails></AboutMeDetails>
          {/* <!-- about right side ends --> */}
        </section>
      </section>
      {/* <!-- Ends About Section --> */}
    </div>
  );
};

export default AboutMeSection;
