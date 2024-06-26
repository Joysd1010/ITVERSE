import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useCart from "../hooks/useCart";
import { AuthContext } from "../Provider/Authprovider";
import { ImMenu } from "react-icons/im";


const MyClass = () => {
  const [cart] = useCart();
  const { user } = useContext(AuthContext);

  // const [isInstructor]=useInstructor()
  const isInstructor = false;

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          
          <div className=" bg-blue-400 flex justify-between px-5 py-3 w-full md:hidden">
          <div className=" flex items-center gap-5">
            <img src="https://i.postimg.cc/jSKx2Wc7/Jsd-itverse.png" className=" w-14" alt="" />
            <h1 className=" text-gray-700 font-bold text-3xl">IT VERSE</h1>
          </div>
          <label
            htmlFor="my-drawer-2"
            className="btn bg-transparent border-none text-black drawer-button lg:hidden"
          >
            <ImMenu size={30}/>

          </label>
          </div>

          <Outlet></Outlet>
          




        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-62 min-h-full bg-cyan-200 text-base-content flex flex-col gap-5">
           
            <li>
              <img
                className=" w-52"
                src="https://i.postimg.cc/jSKx2Wc7/Jsd-itverse.png"
              />
            </li>
            <li>
              <div className=" text-lg font-semibold">
                <img
                  className=" w-16 rounded-full p-1 border-2 border-t-blue-950 border-b-blue-950"
                  src={user.photoURL}
                />{" "}
                {user.displayName}
              </div>
            </li>
            {isInstructor ? (
              <>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink>
                    <h1 className="px-10 py-2 ">Manage Classes</h1>
                  </NavLink>
                </li>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink>
                    <h1 className="px-10 py-2 ">Add a Course</h1>
                  </NavLink>
                </li>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink>
                    <h1 className="px-10 py-2 ">Student Progress</h1>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to={`mylesson/myclass`}>
                    <h1 className="px-10 py-2 ">My Classes</h1>
                  </NavLink>
                </li>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="mylesson/myCart">
                    <h1 className="px-10 py-2 ">
                      My Cart{" "}
                      <span className=" p-2 rounded-full bg-blue-800 mx-10">
                        {cart.length}
                      </span>{" "}
                    </h1>
                  </NavLink>
                </li>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="mylesson/myprogress">
                    <h1 className="px-10 py-2 ">My Progress</h1>
                  </NavLink>
                </li>
                <li className=" bg-slate-500 rounded-xl text-yellow-300">
                  <NavLink to="/">
                    <h1 className="px-10 py-2 ">Home</h1>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyClass;
