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
    <div className="  px-10">
      <h1 className=" text-center text-4xl text-slate-500 font-bold py-2">
        Our Talented Instructors{uniqueInstructorDetailsArray.length}
      </h1>
      <div className="grid grid-cols-3">
        {uniqueInstructorDetailsArray.map((teacher) => (
          <InsturctionCard key={classes._id} tutor={teacher} />
        ))}
      </div>
    </div>
  );
};

export default Instructors;
