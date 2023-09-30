import React from "react";
import ReactStars from "react-stars";

const ClassCard = ({ classs }) => {
  const {
    _id,
    rating,enrolled_students,
    course_name,
    category,price,
    syllabus_info,instructor_details,
    course_logo_image,
    reviews,
  } = classs;
  return (
    <div className="text-gray-700 bg-cyan-400 px-5 py-5 flex flex-col gap-2 rounded-2xl">
      <img className="w-96 rounded-t-2xl" src={course_logo_image} alt="" />
     <div className=" flex justify-between">
        <div className=" flex gap-2 items-center">
        <h1 className=" text-lg font-bold">{rating}</h1>
        <ReactStars
          value={rating}
          color1={"gray"}
          size={20}
          color2={"#ffd700"}
        />
        <h1>({reviews.length})</h1>
      </div>
      <h1 className=" text-xl font-bold">{price}$</h1>
      </div> 
      <h1 className=" text-xl">{course_name}</h1>
      <h1 className="text-sm">Category: {category}</h1>
      <h1 className="text-base">Enrolled: {enrolled_students}</h1>
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-3 ">
            <img className=" p-1 w-16 rounded-full border-2 border-blue-900" src={instructor_details.instructor_image} alt="" />
        <h1>{instructor_details.instructor_name}</h1>
        </div>
        <button className="btn btn-warning">Add To Cart</button>
      </div>

    </div>
  );
};

export default ClassCard;
