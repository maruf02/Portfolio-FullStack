import React from "react";
import "./SkillsProgSpinCard.css";

const SkillsProgSpinCard = ({ card }) => {
  const { id, title, value, color } = card;
  // console.log(id);

  const customStyles = {
    "--ii": value,
    "--clr": color,
  };
  return (
    <div>
      <div
        className="progress relative w-40 h-40 rounded-full my-5"
        style={customStyles}
      >
        <h3 className="h3">
          {value}
          <span className="span">%</span>
        </h3>
        <h4 className="h4">{title}</h4>
      </div>
    </div>
  );
};

export default SkillsProgSpinCard;
