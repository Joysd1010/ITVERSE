import React from "react";
import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className=" bg-blue-200 px-10 py-2">
      {/* -----------------------Navbar--------------------------- */}

      <div className="flex items-center justify-between">
        <div>
          <img
            className="w-24"
            src="https://i.postimg.cc/Bvh66ykR/Jsd-itverse.png"
            alt="LOGO"
          />
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
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
            ><PiShoppingCartBold size={30}/></NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
            }
          >
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
