import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import InsturctionCard from "./InsturctionCard";

const Instructors = () => {
  const classes = useLoaderData();
  const uniqueInstructorsSet = new Set();

  const uniqueInstructorDetailsArray = classes 
    .filter((course) => {
      if (
        !uniqueInstructorsSet.has(course.instructor_details.instructor_name)
      ) {
        uniqueInstructorsSet.add(course.instructor_details.instructor_name);
        return true;
      }
      return false;
    })
    .map((course) => course.instructor_details);

  const instruct = classes.map((course) => course.instructor_details);
  return (
    <div className=" bg-white px-10">
      <h1 className=" text-center text-4xl text-slate-500 font-bold py-2">
        Our Talented Instructors
      </h1>
      <div className="md:py-10 py-5 grid grid-cols-1 md:grid-cols-3 gap-10">
  {uniqueInstructorDetailsArray.map((teacher, index) => (
    <div key={teacher.instructor_name} className="card-wrapper flex justify-center">
      <InsturctionCard tutor={teacher} />
    </div>
  ))}
</div>
    </div>
  );
};

export default Instructors;
