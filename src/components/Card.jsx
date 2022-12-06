import React from "react";

function Card() {
	return (
    <div className="p-2 w-32 h-44 flex flex-col transition-all duration-300 ease-linear items-center justify-evenly bg-dark hover:bg-offwhite/20 text-white hover:text-gold  rounded-md">
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
  );
}

export default Card;
