import { Link } from "react-router-dom";
import word from "../assets/word.svg";
import game from "../assets/game3.svg";
import ml from "../assets/sword.svg";
import mc from "../assets/game4.svg";
import count from "../assets/duration.svg";
import convert from "../assets/convert.svg";
import salary from "../assets/salary-wage-svgrepo-com.svg";
export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 font-poppins">
      <h1 className="font-bold text-xl lg:text-3xl text-center">
        Challange <span className="text-red-500">on Task</span>
      </h1>
      <div className=" flex flex-wrap">
        {/* Tic Tac Toe */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={game} alt="" />
          <h2 className="text-center px-2 pb-2">Game Tic Tac Toe</h2>
          <p className="text-center text-sm font-normal pb-5"> Level : Hard</p>
          <Link
            to=""
            className="bg-neutral-400 hover:bg-blue-700 text-center text-white p-3 pointer-events-none"
          >
            Coming Soon
          </Link>
        </div>
        {/*  */}
        {/* Mobile Legend */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={ml} alt="" />
          <h2 className="text-center px-2 pb-2">Mobile Legend</h2>
          <p className="text-center text-sm font-normal pb-5"> Level : Hard</p>
          <Link
            to="/mobile-legend"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white p-3 "
          >
            Know More
          </Link>
        </div>
        {/*  */}
        {/* Matching Card */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={mc} alt="" />
          <h2 className="text-center px-2 pb-2">Matching Card</h2>
          <p className="text-center text-sm font-normal pb-5"> Level : Hard</p>
          <Link
            to=""
            className="bg-neutral-400 hover:bg-blue-700 text-center text-white p-3 pointer-events-none"
          >
            Coming Soon
          </Link>
        </div>
        {/*  */}
        {/* Count Duration */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={count} alt="" />
          <h2 className="text-center px-2 pb-2">Count Duration</h2>
          <p className="text-center text-sm font-normal pb-5">Level : Medium</p>
          <Link
            to="/countdown-time"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white p-3 "
          >
            Coming Soon
          </Link>
        </div>
        {/*  */}
        {/* Currency Convert */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={convert} alt="" />
          <h2 className="text-center px-2 pb-2">Currency Convert</h2>
          <p className="text-center text-sm font-normal pb-5">Level : Medium</p>
          <Link
            to="/convert"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white p-3"
          >
            Know More
          </Link>
        </div>
        {/*  */}
        {/* Salary Calculating */}
        <div className="flex flex-col bg-white mb-9 rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={salary} alt="" />
          <h2 className="text-center px-2 pb-2">Salary Calculating</h2>
          <p className="text-center text-sm font-normal pb-5">Level : Easy</p>
          <Link
            to="/salary-count"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white p-3"
          >
            Know More
          </Link>
        </div>
        {/*  */}

        <div className="flex flex-col bg-white rounded-lg shadow-lg w-full m-6 overflow-hidden sm:w-96 sm:mx-auto">
          <img className="h-20 m-6" src={word} alt="" />
          <h2 className="text-center px-2 pb-2">Word Scramb</h2>
          <p className="text-center text-sm font-normal pb-5"> Level : Easy</p>
          <Link
            to="/word-scramb"
            className="bg-blue-500 hover:bg-blue-700 text-center text-white p-3"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
}
