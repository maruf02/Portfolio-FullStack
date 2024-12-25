import React, { useEffect, useState } from "react";
// import ProjectsAllCards from "../ProjectsAllCards/ProjectsAllCards";
import ProjectCategoryCard from "../ProjectCategoryCard/ProjectCategoryCard";

const ProjectCategory = ({ setSearchText }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  useEffect(() => {
    fetch(
      "https://maruf02.github.io/Asset-Json-Img-dont-delete/ProjectCategory.json"
    )
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  console.log("category", category);
  const handleCategoryClick = (categoryTitle) => {
    setSearchText(categoryTitle); // Set the selected category in state
  };
  // console.log("selecte:", selectedCategory);
  return (
    <div>
      <section className="container mx-auto  h-fit wcontainer portfolio-container">
        {/* <!-- tab section --> */}
        <section className=" flex flex-row flex-wrap gap-3 -ml-16 lg:-ml-0 md:gap-5 text-center justify-center pt-10 pb-8 ">
          {category.map((card) => (
            <ProjectCategoryCard
              key={card.id}
              card={card}
              onCategoryClick={handleCategoryClick}
            ></ProjectCategoryCard>
          ))}
        </section>
      </section>
    </div>
  );
};

export default ProjectCategory;
