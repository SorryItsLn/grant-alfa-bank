import React from "react";

const ReviewCard = ({ img, name, work, description }) => {
  return (
    <div className="h-full bg-white/15 p-4 shadow-lg rounded-md ">
      <div className="flex justify-start gap-6">
        <div>
          <img src={img} width={"60"} alt="" />
        </div>
        <div>
          <h1 className="font-bold">{name}</h1>
          <p>{work}</p>
        </div>
      </div>
      <div className="text-wrap mt-2">{description}</div>
    </div>
  );
};

export default ReviewCard;
