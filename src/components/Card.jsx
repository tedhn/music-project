import React from "react";
import { Link } from "react-router-dom";
// import "./Card.css";
function Card() {
  return (
    // cardSection
    <div className="w-full ml-8 pl-4 pr-4">
      <h2 className="title">PlayList</h2>
      {/* cardBox */}
      <div className="flex flex-row items-center gap-12">
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray  rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
        {/* card */}
        <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-black hover:bg-offwhite text-white hover:text-gray rounded-md">
          <div className="w-20 h-20 mb-2">
            <img
              src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <p className="text-base">PlayList Name</p>

            <p className="text-xs text-center">PlayList Owner</p>
          </div>
        </div>
      </div>

      <Link to="/playlist" className="text-white text-sm ml-80">
        Find More PlayList
      </Link>
    </div>
  );
}

export default Card;
