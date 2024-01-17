import { Link } from "react-router-dom";
import back from "../assets/back.svg";

export default function Navbar() {
  return (
    <div className="w-full py-5 px-12 md:px-28">
      <div className="rounded-full w-10 hover:bg-blue-700  ">
        <Link
          to="/"
          type="submit"
          className="  hover:text-white  hover:border-white  rounded-full"
        >
          <img src={back} alt="" className="h-10 " />
        </Link>
      </div>
    </div>
  );
}
