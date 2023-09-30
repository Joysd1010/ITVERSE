import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/Authprovider";
import useCart from "../hooks/useCart";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart]=useCart();
  console.log(cart)
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" bg-blue-200 px-10 py-2">
      {/* -----------------------Navbar--------------------------- */}

      <div className="flex items-center justify-between">
        <div className="flex gap-1 items-center">
          <img
            className="w-24"
            src="https://i.postimg.cc/Bvh66ykR/Jsd-itverse.png"
            alt="LOGO"
          />  <h1 className="text-gray-700 text-2xl font-bold">IT UNIVERSE</h1>
        </div>
        <div className=" flex  items-center gap-4">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            Home{" "}
          </NavLink>
          <NavLink
            to={"course"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600 duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            Courses
          </NavLink>
          <NavLink
            to={"instructor"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            Instructors
          </NavLink>
        </div>
        <div className="flex justify-between items-center gap-4">
        <NavLink
              to="/Class"
              className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300 tooltip tooltip-open tooltip-primary"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300 tooltip tooltip-open tooltip-primary"
            } data-tip={`+${cart?.length||0}`}><PiShoppingCartBold size={30}/></NavLink>
{
                user?.photoURL? <img src={user.photoURL} className=" w-16 rounded-full p-2 border-2 border-r-slate-800 border-l-slate-800" />: <FaUserAlt/>
                
              }


         {!user? <NavLink to={"/login"}
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
          > 
            Login
          </NavLink>:<div onClick={logOut} className="text-gray-600 font-bold text-base md:text-xl px-5  hover:bg-white hover:text-blue-800 hover:-translate-y-3 rounded-xl py-2 duration-500">
          {" "}
          Sign Out
        </div>}
        </div>
      </div>
    </div>
  );
};

export default Header;
