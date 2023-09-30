import React from "react";

const InsturctionCard = ({ tutor }) => {
  const {
    instructor_name,
    instructor_image,
    qualification,
    experience,
    course_duration,
  } = tutor;
  return <div>
<div className="bg-cyan-500">
    <img src={instructor_image} />
    <div>
        <h1 className="text-2xl font-bold text-slate600">{instructor_name}</h1>
        <h1 className="text-lg">{qualification}</h1>
        <h1 className=" text-base">{experience}</h1>
    </div>
</div>


  </div>;
};

export default InsturctionCard;
