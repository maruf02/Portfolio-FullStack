import React from "react";
import "./SkillsSoftProgCard.css";

const SkillsSoftProgCard = ({ card }) => {
  const { id, title, value, color } = card;
  // console.log(id);
  const customStyles = {
    "--clr": color,
  };
  return (
    <div className="mb-8 ">
      <div className="skills_main">
        <div className="skill_bar">
          <div className="info">
            <p
              className="textC text-xl font-bold uppercase "
              style={customStyles}
            >
              {title}
            </p>
            <p>{value}%</p>
          </div>
          <div className="bar ml-3">
            <span className="html" style={customStyles}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSoftProgCard;
