import React from "react";
import { Link } from "react-router-dom";
// import "./listItem.css";
const ListItem = () => {
  return (
    // listSection
    <div className="flex flex-row items-center justify-between w-full h-16 px-8 py-8 text-white transition-all duration-300 ease-linear hover:rounded-lg bg-gray hover:bg-offwhite/20 hover:text-gold">
      {/* listItemLeft */}
      <div className="flex flex-row items-center justify-center w-1/3 gap-8">
        <p>1</p>
        <img
          src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
          alt="artist"
          // singerPic
          className="w-10 h-10"
        />
        <div className="grow">
          <p>Song Title</p>
          <small>Artist Title</small>
        </div>
      </div>
      {/* listItemData */}
      <div className="flex flex-row items-center justify-around w-2/3 gap-8">
        <p>Album Name</p>
        <p>Date Added</p>
        <p>Duration</p>
        <p>...</p>
      </div>
    </div>
  );
};

export default ListItem;
