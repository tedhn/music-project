import React from "react";
import { Link } from "react-router-dom";
// import "./listItem.css";
const ListItem = () => {
  return (
    // listSection
    <div className="w-100">
      {/* <h1 className="text-lg text-red-600">Hello ListItem</h1> */}
      <ul className="ml-8 mt-1">
        <li>
          {/* //listItem */}
          <div className="hover:rounded-lg  w-11/12 h-16 px-8 py-8 flex flex-row  items-center gap-20 bg-gray hover:bg-offwhite text-white hover:text-gold">
            {/* listItemLeft */}
            <div className="flex flex-row justify-center items-center gap-8">
              <p>1</p>
              <img
                src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
                alt="artist"
                // singerPic
                className="w-10 h-10"
              />
              <div>
                <p>Song Title</p>
                <small>Artist Title</small>
              </div>
            </div>
            {/* listItemData */}
            <div className="flex flex-row items-center justify-evenly gap-32">
              <p>Album Name</p>
              <p>Date Added</p>
              <p>Duration</p>
              <p>...</p>
            </div>
          </div>
        </li>
        <li>
          {/* //listItem */}
          <div className="hover:rounded-lg  w-11/12 h-16 px-8 py-8 flex flex-row  items-center gap-20 bg-gray hover:bg-offwhite text-white hover:text-gold">
            {/* listItemLeft */}
            <div className="flex flex-row justify-center items-center gap-8">
              <p>1</p>
              <img
                src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
                alt="artist"
                // singerPic
                className="w-10 h-10"
              />
              <div>
                <p>Song Title</p>
                <small>Artist Title</small>
              </div>
            </div>
            {/* listItemData */}
            <div className="flex flex-row items-center justify-evenly gap-32">
              <p>Album Name</p>
              <p>Date Added</p>
              <p>Duration</p>
              <p>...</p>
            </div>
          </div>
        </li>
        <li>
          {/* //listItem */}
          <div className="hover:rounded-lg  w-11/12 h-16 px-8 py-8 flex flex-row  items-center gap-20 bg-gray hover:bg-offwhite text-white hover:text-gold">
            {/* listItemLeft */}
            <div className="flex flex-row justify-center items-center gap-8">
              <p>1</p>
              <img
                src="https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c"
                alt="artist"
                // singerPic
                className="w-10 h-10"
              />
              <div>
                <p>Song Title</p>
                <small>Artist Title</small>
              </div>
            </div>
            {/* listItemData */}
            <div className="flex flex-row items-center justify-evenly gap-32">
              <p>Album Name</p>
              <p>Date Added</p>
              <p>Duration</p>
              <p>...</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
