import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ProjectLiveShow = () => {
  const cards = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const card = cards.find((card) => card.id === idInt);
  const { project_title, img, live_link } = card;
  return (
    <div className="pt-10 lg:pt-10">
      <div className="mt-4">
        <iframe
          title="Live Link"
          src={live_link}
          width="100%"
          height="800px"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ProjectLiveShow;
