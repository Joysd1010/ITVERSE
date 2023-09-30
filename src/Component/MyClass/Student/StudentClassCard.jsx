import React from "react";
import { Link, NavLink } from "react-router-dom";
import ReactStars from "react-stars";

const StudentClassCard = ({ state }) => {
  const {
    rating,

    _id,
    course_logo_image,
    instructor_details,
    course_name,
    category,
  } = state;

  return (
    <div>
      <div className="text-gray-700 bg-cyan-400 px-5 py-5 flex flex-col gap-2 rounded-2xl">
        <div>
          <img className="w-56 rounded-2xl" src={course_logo_image} alt="" />
        </div>
        <div className=" flex justify-between">
          <div className=" flex gap-2 items-center">
            <h1 className=" text-lg font-bold">{rating}</h1>
            <ReactStars
              value={rating}
              color1={"gray"}
              size={20}
              color2={"#ffd700"}
            />
          </div>
        </div>
        <div>
          <h1 className=" text-lg">{course_name}</h1>
        </div>
        <h1 className="text-sm">Category: {category}</h1>

        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-3 ">
            <img
              className=" p-1 w-12 rounded-full border-2 border-blue-900"
              src={instructor_details.instructor_image}
            />
            <h1>{instructor_details.instructor_name}</h1>
          </div>
          <NavLink to={`/mylesson/video/${_id}`}>
            <button className="btn btn-warning">view classes</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default StudentClassCard;
