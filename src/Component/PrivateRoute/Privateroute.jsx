import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovider";
import { Dna } from "react-loader-spinner";
import Swal from "sweetalert2";

const Privateroute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-around">
        <Dna
          visible={true}
          height="100"
          width="180"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please login to continue",
      showConfirmButton: false,
      timer: 2000
    });
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
  }
};

export default Privateroute;
