import React from "react";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";

export default function Back() {
  return (
    <div className="ml-0 rounded-full w-10 hover:bg-blue-700  ">
      <Link
        to="/"
        type="submit"
        className="  hover:text-white  hover:border-white  rounded-full"
      >
        <img src={back} alt="" className="h-10 " />
      </Link>
    </div>
  );
}
