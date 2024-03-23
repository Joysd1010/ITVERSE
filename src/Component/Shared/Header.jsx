import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { RxCross1 } from "react-icons/rx";

import { FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../Provider/Authprovider";
import useCart from "../hooks/useCart";

const Header = () => {
  const [menu, setMenu] = useState(true);
  const handleMenuOpen = () => {
    setMenu(false);
  };
  const handleMenuClose = () => {
    setMenu(true);
  };
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart);
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className=" sticky top-0 z-50 bg-blue-200 md:px-10 px-3 py-2">
      {/* -----------------------Navbar--------------------------- */}

      <div className="flex items-center justify-between">
        <NavLink to={"/"}>
          <div className="flex gap-1 items-center">
            <img
              className="md:w-24 w-14"
              src="https://i.postimg.cc/jSKx2Wc7/Jsd-itverse.png"
              alt="LOGO"
            />{" "}
            <h1 className="text-gray-700 md:text-2xl text-xl font-bold">
              IT UNIVERSE
            </h1>
          </div>
        </NavLink>

        <div
          className={` shadow-xl shadow-blue-500 md:shadow-none flex md:static absolute z-50 md:flex-row flex-col justify-between items-start md:items-center gap-2 md:gap-4 ${
            !menu
              ? "top-16 right-0 md:px-0 px-5 bg-blue-200 rounded-lg py-2 duration-700 "
              : "right-0 -top-72 duration-700"
          }`}
        >
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
          <NavLink
            to="/myLesson"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300 tooltip tooltip-open tooltip-primary"
                : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300 tooltip md:tooltip-top tooltip-right tooltip-open tooltip-primary"
            }
            data-tip={`+${cart?.length || 0}`}
          >
            <PiShoppingCartBold size={30} />
          </NavLink>
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              className=" w-16 rounded-full p-2 border-2 px-5 border-r-slate-800 border-l-slate-800"
            />
          ) : (
            <FaUserAlt className=" mx-5 text-gray-600" size={25} />
          )}

          {!user ? (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive
                  ? "text-white font-bold text-base md:text-xl px-5 py-2 rounded-md bg-blue-600  duration-300"
                  : "text-gray-600 font-bold text-base md:text-xl px-5  duration-300"
              }
            >
              Login
            </NavLink>
          ) : (
            <div
              onClick={logOut}
              className="text-gray-600 font-bold text-base md:text-xl px-5  hover:bg-white hover:text-blue-800 hover:-translate-y-3 rounded-xl py-2 duration-500"
            >
              {" "}
              Sign Out
            </div>
          )}
        </div>

        <div className=" md:hidden ml-5">
          {menu ? (
            <div className=" -rotate-270 duration-300 text-gray-700 rounded-lg">
              <RiMenu3Fill onClick={handleMenuOpen} size={30} />
            </div>
          ) : (
            <div className=" rotate-90 duration-300 text-gray-700 font-bold rounded-lg">
              <RxCross1 onClick={handleMenuClose} size={30} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
