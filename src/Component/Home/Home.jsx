import React from "react";
import { useLoaderData } from "react-router-dom";
import ClassCard from "../Course/ClassCard";

const Home = () => {
  const CourseData = useLoaderData();
  const Popular= CourseData.sort((a, b) => b.enrolled_students - a.enrolled_students)
    const dataScience=CourseData.filter(info=>info.category=="Data Science")
    const AI=CourseData.filter(info=>info.category=="AI")
    const App=CourseData.filter(info=>info.category=="App")
    const UIUX=CourseData.filter(info=>info.category=="UI UX")
    const Development=CourseData.filter(info=>info.category=="Development")
    const DataEntry=CourseData.filter(info=>info.category=="Data Entry")
  return (
    <div>
      {/* --------------------------Banner Section --------------------- */}
      <img
        className=" md:w-screen"
        src="https://i.postimg.cc/hGJVP921/Unlock-your-potential-with-limitless-2.png"
        alt="Banner"
      />
      {/* ------------------------------Category Section--------------- */}
      <div className=" bg-violet-500  px-10 py-5">
        <div className=" text-white text-3xl md:text-4xl md:text-start text-center font-bold py-2">
          <h1>Explore the wide Categories</h1>
        </div>
        <div className=" grid grid-cols-1 w-2/3 md:mx-0 md:w-full md:py-5 mx-auto md:grid-cols-3 gap-8">
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/vZMDh1Mf/Untitled-design-22.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Science</h1>
                <h2 className=" text-sm">{dataScience.length} Courses</h2>
            </div>
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/3wxNMPkw/Untitled-design-23.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Entry</h1>
                <h2 className=" text-sm">{DataEntry.length} Courses</h2>
            </div>
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/Nj4FzgfV/Untitled-design-21.png" alt="" /></div>
                <h1 className="text-2xl font-medium">UI UX Design</h1>
                <h2 className=" text-sm">{UIUX.length} Courses</h2>
            </div>
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/CKr1wm8s/Untitled-design-24.png" alt="" /></div>
                <h1 className="text-2xl font-medium">App Development</h1>
                <h2 className=" text-sm">{App.length} Courses</h2>
            </div>
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/vZMDh1Mf/Untitled-design-22.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Science</h1>
                <h2 className=" text-sm">{Development.length} Courses</h2>
            </div>
            <div className=" bg-blue-300 bg-opacity-100 shadow-xl hover:shadow-blue-800 duration-300 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/yxMQkvvZ/Untitled-design-25.png" alt="" /></div>
                <h1 className="text-2xl font-medium">AI & Machine Learning</h1>
                <h2 className=" text-sm">{AI.length} Courses</h2>
            </div>
            
            
        </div>
{/* -------------------------------pOPULAR COURSES--------------------------    */}
<div className="py-3">
  <h1 className=" text-center text-3xl md:text-4xl font-bold text-white py-5">Our Recommended Courses </h1>
  <div className=" md:py-10 grid grid-cols-1 md:grid-cols-3 gap-10">{
    Popular.slice(0,3).map((session) => (
      <ClassCard key={session._id} classs={session} />
    ))
  }</div>
</div>

      </div>
    </div>
  );
};

export default Home;
