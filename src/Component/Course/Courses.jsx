import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ClassCard from "./ClassCard";
import { BsSearch } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";

const Courses = () => {
  const [ALLClass, setClass] = useState([]);
  const [data, setData] = useState(ALLClass);
  useEffect(() => {
    fetch("https://serverco-de.vercel.app/course")
      .then((res) => res.json())
      .then((info) => {
        setClass(info);
        setData(info);
      });
  }, []);
  const filter = (event) => {
    setData(
      ALLClass.filter((lesson) =>
        lesson.course_name.toLowerCase().includes(event.target.value)
      )
    );
  };

  const tutorhandler = (prop) => {
    setData(
      ALLClass.filter(
        (lesson) => lesson.instructor_details.instructor_name == prop
      )
    );
  };

  const CategoryHandler = (prop) => {
    setData(ALLClass.filter((lesson) => lesson.category == prop));
    console.log(ALLClass);
  };
  const handleAllClass = () => {
    // console.log(ALLClass)
    setData(ALLClass);
    //    console.log(data)
  };
  const RatingSOrter = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => b.rating - a.rating);
    setData(sortedData);
  };
  const priceSOrter = () => {
    const sortedData = [...data];
    sortedData.sort((a, b) => a.price - b.price);
    setData(sortedData);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleToggle2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div className=" bg-white px-2 md:px-10 overflow-hidden">
      {/* -------------------Search Bar-------------------------- */}
      <div className="flex justify-center ">
        <div className="bg-cyan-400 rounded-xl flex items-center my-3">
          <input
            className="m-1 pl-3 pr-24 py-2 md:w-full w-3/4 bg-white rounded-xl"
            onChange={filter}
            type="text"
            placeholder="Search Courses"
          />
          <button>
            <BsSearch color="#F7E1AE" size={30} className="mx-2" />
          </button>
        </div>
      </div>


      

      {/* ----------------------Category list and filter list------------------------ */}
     <div className=" sticky top-[72px] md:top-28 bg-white">
      <div className=" flex justify-between items-center">
        <div className="collapse text-gray-800">
          <input type="checkbox" onChange={handleToggle} checked={isOpen} />
          <div className="flex gap-5 items-center cursor-pointer collapse-title text-xl  font-medium p-2">
            <h1> Find by Category</h1>
            <span
              className={`text-xl transition-all duration-300 transform ${
                isOpen ? "-rotate-180" : "rotate-0"
              }`}
            >
              <FaChevronDown />
            </span>
          </div>
          <div className="collapse-content">
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="btn btn-accent"
                onClick={() => handleAllClass()}
              >
                All Courses
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("AI")}
              >
                AI
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("UI UX")}
              >
                UI UX design
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("Development")}
              >
                WEB Development
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("App")}
              >
                APP Development
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("Data Science")}
              >
                Data Science
              </button>
              <button
                className="btn btn-accent"
                onClick={() => CategoryHandler("Data Entry")}
              >
                Data Entry
              </button>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-accent m-1">
            Click to sort data
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li onClick={() => priceSOrter()}>
              <a>Sort by Price</a>
            </li>
            <li onClick={() => RatingSOrter()}>
              <a>Sort by Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="collapse text-gray-800">
        <input type="checkbox" onChange={handleToggle2} checked={isOpen2} />
        <div className="flex gap-5 items-center cursor-pointer collapse-title text-xl  font-medium p-2">
         <h1> Find by Tutor</h1>
          <span
            className={`text-xl transition-all duration-300 transform ${
              isOpen2 ? "-rotate-180" : "rotate-0"
            }`}
          >
            <FaChevronDown />
          </span>
        </div>
        <div className="collapse-content">
        <div className="flex flex-wrap items-center gap-4 py-1">
        <button
                className="btn btn-accent"
                onClick={() => handleAllClass()}
              >
                All Courses
              </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Samuel")}
            >
              Samuel
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Mathew")}
            >
              Mathew{" "}
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Smith")}
            >
              Smith{" "}
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Jade")}
            >
              Jade
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Katherine")}
            >
              Katherine
            </button>
            <button
              className="btn btn-accent"
              onClick={() => tutorhandler("Razia Chowdhary")}
            >
              Razia
            </button>
          </div>
        </div>
      </div>
     </div>
      {/* --------------------------CourseCatolog------------------------ */}
      <div className="  md:py-10 grid grid-cols-1 md:px-0 px-5 py-5 md:grid-cols-3 gap-10">
        {data.length == 0 ? (
          <h1>Sorry, No Class Available</h1>
        ) : (
          data.map((session) => (
            <ClassCard key={session._id} classs={session} />
          ))
        )}
      </div>
    </div>
  );
};

export default Courses;
