import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col justify-center">
      <div className="flex justify-center text-white container mx-auto mt-60">
        <div className="text-center ">
          <p className="md:text-4xl sm:text-2xl text-lg font-bold">Oops!</p>
          <h1 className="md:text-5xl sm:text-4xl text-xl font-bold mt-2">
            You've traveled quit far !!
          </h1>

          <Link
            to="/"
            className="flex justify-center md:text-base text-sm font-semibold items-center gap-2 mt-6 border mx-auto p-2 hover:bg-white hover:text-black transition-all ease-linear duration-300 w-60"
          >
            LET'S GO HOME <AiFillHome size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
