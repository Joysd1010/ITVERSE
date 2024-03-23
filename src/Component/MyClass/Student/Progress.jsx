import React from "react";
import { ProgressBar } from "react-loader-spinner";

const Progress = () => {
  return (
    <div className=" flex flex-col justify-around">
      <p className=" pt-20 text-xl">This feature is comming soon ....</p>
      <div className=" mx-auto"><ProgressBar
        visible={true}
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /></div>
      
    </div>
  );
};

export default Progress;
