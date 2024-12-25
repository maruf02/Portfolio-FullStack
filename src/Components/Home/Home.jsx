import BannerSection from "../BannerSection/BannerSection";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import SkillsSection from "../SkillsSection/SkillsSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import ContactSection from "../ContactSection/ContactSection";
import ExperienceSection from "../ExperienceSection/ExperienceSection";
import BlogSection from "../BlogSection/BlogSection";

const Home = () => {
  return (
    <div>
      <button id="myBtn">&#8593;</button>
      <BannerSection></BannerSection>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      {/* <ServiceSection></ServiceSection>
      <MyTeamSection></MyTeamSection> */}
      <ExperienceSection></ExperienceSection>
      <ProjectsSection></ProjectsSection>
      <BlogSection></BlogSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
