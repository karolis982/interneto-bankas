import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-success text-white text-center py-3">
      <h1>Interneto bankas</h1>
      <Link to="/create-client" className="btn btn-light mt-2">
        Kurti naują vartotoją
      </Link>
      <br></br>
      <Link to="/login" className="btn btn-light mt-2 ml-2">
        Prisijungti
      </Link>
    </div>
  );
};

export default Header;
