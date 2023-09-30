import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const CartCard = ({ state }) => {
const {user}=useContext(AuthContext)

const [,refetch]=useCart()
  const {
    classId,
    rating,
    price,
    _id,
    course_logo_image,
    instructor_details,
    course_name,
    category,
    enrolled_students,
  } = state;

const handleEnroll=()=>{
    const classLesson = {
        cart:_id,
        ConstantClassId: classId,
        email: user.email,
        rating,
        course_logo_image,
        
        category,
        price,
        instructor_details,
        
        course_name,
      };
      fetch("http://localhost:5000/enrol", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(classLesson),
      })
        .then((res) => res.json())
        .then((data) => {
            if (data.insertedId) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Successfully Enrolled",
                                showConfirmButton: false,
                                timer: 1500,
                              });
                        }
                    })


              
              
            }
          });

}

  return (
    <div>
      <div className="text-gray-700 bg-cyan-400 px-5 py-5 flex flex-col gap-2 rounded-2xl">
        <Link to={`/details/${classId}`}>
          <img className="w-56 rounded-2xl" src={course_logo_image} alt="" />
        </Link>
        <div className=" flex justify-between">
          <div className=" flex gap-2 items-center">
            <h1 className=" text-lg font-bold">{rating}</h1>
            <ReactStars
              value={rating}
              color1={"gray"}
              size={20}
              color2={"#ffd700"}
            />
          </div>
          <h1 className=" text-xl font-bold">{price}$</h1>
        </div>
        <NavLink to={`/details/${classId}`}>
          <h1 className=" text-lg">{course_name}</h1>
        </NavLink>
        <h1 className="text-sm">Category: {category}</h1>
        <h1 className="text-base">Enrolled: {enrolled_students}</h1>
        <div className=" flex items-center justify-between ">
          <div className=" flex items-center gap-3 ">
            <img
              className=" p-1 w-12 rounded-full border-2 border-blue-900"
              src={instructor_details.instructor_image}
            />
            <h1>{instructor_details.instructor_name}</h1>
          </div>
          <button onClick={() => handleEnroll()} className="btn btn-warning">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
