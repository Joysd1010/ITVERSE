import React, { useContext } from "react";
import ReactStars from "react-stars";
import { AuthContext } from "../Provider/Authprovider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import { Link, NavLink } from "react-router-dom";

const ClassCard = ({ classs }) => {


  const {
    _id,
    rating,
    enrolled_students,
    course_name,
    category,
    price,
    syllabus_info,
    instructor_details,
    course_logo_image,
    reviews,
  } = classs;

  const [,refetch]=useCart()

  const { user } = useContext(AuthContext);
  const handleLesson = () => {
    if (user) {
     
      const classLesson = {
        classId: _id,
        email: user.email,
        rating,
        course_logo_image,
        syllabus_info,
        category,
        price,
        instructor_details,
        
        course_name,
      };
      fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classLesson),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Added to Cart",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    }
  };

  return (
    <div className="text-gray-700 bg-cyan-400 px-5 py-5 flex flex-col gap-2 rounded-2xl">
     <Link to={`/details/${_id}`}><img className="w-96 rounded-t-2xl" src={course_logo_image} alt="" /></Link> 
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
      <NavLink to={`/details/${_id}`}><h1 className=" text-xl">{course_name}</h1></NavLink>
      <h1 className="text-sm">Category: {category}</h1>
      <h1 className="text-base">Enrolled: {enrolled_students}</h1>
      <div className=" flex items-center justify-between ">
        <div className=" flex items-center gap-3 ">
          <img
            className=" p-1 w-16 rounded-full border-2 border-blue-900"
            src={instructor_details.instructor_image}
            alt=""
          />
          <h1>{instructor_details.instructor_name}</h1>
        </div>
        <button onClick={() => handleLesson()} className="btn btn-warning">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
