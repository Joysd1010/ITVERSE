import React from "react";
import { useLoaderData } from "react-router-dom";

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
        className=" w-screen"
        src="https://i.postimg.cc/hGJVP921/Unlock-your-potential-with-limitless-2.png"
        alt="Banner"
      />
      {/* ------------------------------Category Section--------------- */}
      <div className=" bg-violet-950  px-10 py-5">
        <div className=" text-white text-4xl font-bold py-2">
          <h1>Explore the Categories</h1>
        </div>
        <div className=" grid grid-cols-3 gap-8">
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/vZMDh1Mf/Untitled-design-22.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Science</h1>
                <h2 className=" text-sm">{dataScience.length} Courses</h2>
            </div>
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/3wxNMPkw/Untitled-design-23.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Entry</h1>
                <h2 className=" text-sm">{DataEntry.length} Courses</h2>
            </div>
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/Nj4FzgfV/Untitled-design-21.png" alt="" /></div>
                <h1 className="text-2xl font-medium">UI UX Design</h1>
                <h2 className=" text-sm">{UIUX.length} Courses</h2>
            </div>
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/CKr1wm8s/Untitled-design-24.png" alt="" /></div>
                <h1 className="text-2xl font-medium">App Development</h1>
                <h2 className=" text-sm">{App.length} Courses</h2>
            </div>
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/vZMDh1Mf/Untitled-design-22.png" alt="" /></div>
                <h1 className="text-2xl font-medium">Data Science</h1>
                <h2 className=" text-sm">{Development.length} Courses</h2>
            </div>
            <div className=" bg-violet-300 bg-opacity-80 rounded-xl text-[#322c32] px-5 py-5 flex flex-col gap-3">
                <div className=" shadow-slate-700 shadow-md  w-20 rounded-full border-2 p-3 border-gray-700"> <img  src="https://i.postimg.cc/yxMQkvvZ/Untitled-design-25.png" alt="" /></div>
                <h1 className="text-2xl font-medium">AI & Machine Learning</h1>
                <h2 className=" text-sm">{AI.length} Courses</h2>
            </div>
            
            
        </div>
{/* -------------------------------pOPULAR COURSES--------------------------    */}


      </div>
    </div>
  );
};

export default Home;
