import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";

const Classvideo = () => {
  const { user } = useContext(AuthContext);
  const enroll = useLoaderData();
const [courseProgress,setprogress]=useState([])
useEffect(()=>{
    fetch("http://localhost:5000/progress")
    .then(res=>res.json())
    .then(data=>{
        setprogress(data.filter(info=>info.course==enroll._id))
    })
},[])

console.log(courseProgress);

  const handleChapter2=()=>{
    fetch(`http://localhost:5000/progress/${courseProgress._id}`,{
        method:'PATCH',
        
    }).then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            console.log(data)
            
            Swal.fire({
            position: "center",
            icon: "success",
            title: `Chapter 2 Completed Congratulation`,
            showConfirmButto1n: false,
            timer: 1500,
          })
        }
        
    })
  }
  const handleProgress1 = () => {
    const progress = {
      email: user.email,
      course: enroll._id,
      complete: 50,
    };
    fetch("http://localhost:5000/progress", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(progress),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Completed Chapter 1",
            showConfirmButton: false,
            timer: 1500,
          });

          navigate(from, { replace: true });
        }
      });
  };
//   console.log(enroll);
  return (
    <div>
      <div className="divider"></div>
      <div className="divider text-3xl">Complete Your Classes</div>
      <div className="divider"></div>
      <h1 className="text-2xl font-bold text-center">{enroll.course_name}</h1>
      <div className=" flex flex-col gap-3 py-5">
        <iframe
          src="https://drive.google.com/file/d/1lk6OAAov73qurGIH3n6rhCDvxnKoRZhH/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <div onClick={() => handleProgress1()}  className=" btn btn-success ">
          Complete Class 1{" "}
        </div>

        <iframe
          src="https://drive.google.com/file/d/1RXwDZDoiloVpc-ZUjDUisPcnXXtU07UB/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
        <div className=" btn btn-success">Complete Class 2</div>
      </div>
    </div>
  );
};

export default Classvideo;
