import React from "react";

function Card({ img, name, ownerName }) {
  return (
    <div className="p-2 w-32 h-44 flex flex-col items-center justify-evenly bg-dark hover:bg-offwhite/20 text-white hover:text-gray  rounded-md">
      <div className="w-20 h-20 mb-2">
        <img src={img} className="w-full h-full object-cover rounded-full" />
      </div>
      <div>
        <p className="text-base p-2 w-32 h-8 overflow-hidden whitespace-nowrap text-ellipsis">
          {name}
        </p>

        <p className="text-xs text-center p-2 w-32 h-8 overflow-hidden whitespace-nowrap text-ellipsis">
          {ownerName}
        </p>
      </div>
    </div>
  );
}

export default Card;
