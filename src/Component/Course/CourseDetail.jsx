import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import ReactStars from "react-stars";

const CourseDetail = () => {
  const course = useLoaderData();
  const {
    course_name,
    category,
    rating,
    enrolled_students,
    price,
    syllabus_info,
    reviews,
    course_logo_image,
    instructor_details,
  } = course;

  console.log(instructor_details);

  return (
    <div className="">
      <div className=" flex items-start flex-col md:flex-row bg-white text-gray-700 p-10 gap-10">
        <div>
          <img className=" rounded-xl shadow-xl shadow-blue-500" src={course_logo_image} />
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" text-3xl text-slate-600 font-bold">
            Course Name : <span className="text-blue-700">{course_name}</span>
          </h1>
          <h1 className=" text-xl text-lime-800">
            Course Category : {category}
          </h1>
          <h1>Syllabus : {syllabus_info}</h1>
          <h1> Course Duration : {instructor_details.course_duration}</h1>
          <h1> Price : {price}$</h1>
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
          <h1>Tutor: </h1>
          <div className="bg-cyan-200 flex-col md:flex-row rounded-lg flex ">
            <img
              className=" p-3 w-48  "
              src={instructor_details.instructor_image}
            />
            <div className="mx-5 flex flex-col gap-2  py-3">
              <h1 className="text-2xl font-bold text-slate600">
                {instructor_details.instructor_name}
              </h1>
              <h1 className="text-lg">{instructor_details.qualification}</h1>
              <h1 className=" text-base">{instructor_details.experience}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
