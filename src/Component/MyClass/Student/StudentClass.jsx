import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/Authprovider';
import StudentClassCard from './StudentClassCard';
// import { useLoaderData } from 'react-router-dom';

const StudentClass = () => {
    const {user}=useContext(AuthContext)
 const [enrollList,setEnroll]=useState([])
 useEffect(()=>{
    fetch("https://serverco-de.vercel.app/enroll")
    .then(res=>res.json())
    .then(data=>{
        setEnroll(data);
    })
 })
// console.log(enrollList)
const myClass=enrollList.filter(course=>course.email==user.email)
// console.log(myClass)
    return (
        <div><div className="divider"></div> 
        <div className="divider text-lg md:text-3xl ">My Enrolled Courses</div> 
        <div className="divider"></div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20 py-5'>
            {
                myClass.map((session)=>(<StudentClassCard key={session._id} state={session}/>))
            }
        </div></div>
    );
};

export default StudentClass;