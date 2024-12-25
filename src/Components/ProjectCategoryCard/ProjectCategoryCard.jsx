import React from "react";

const ProjectCategoryCard = ({ card, onCategoryClick }) => {
  const { id, category_title } = card;

  const handleSearch = () => {
    // console.log(category_title);
    // const categoryName = category_title;
    onCategoryClick(category_title);
  };

  return (
    <div>
      <div className="outer relative  h-12 w-40 rounded-[50px] mt-3 -top-2 left-10">
        <button
          onClick={handleSearch}
          className="btnn absolute top-[50%] left-[50%] bg-[#34347f] text-white outline-none
                          border-none text-xl z-[9] tracking-[1px] uppercase cursor-pointer h-[44px] w-[155px] rounded-[50px]
                          hover:bg-lime-500"
        >
          {category_title}
        </button>
      </div>
    </div>
  );
};

export default ProjectCategoryCard;
