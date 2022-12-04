import React from "react";
import { BsEmojiSmileFill, BsPlusCircle, BsSearch } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Navbar = () => {
  console.count("1");

  return (
    <div className="col-span-2 row-span-5 shadow-lg bg-dark">
      <div className="flex flex-col items-center w-full h-full gap-4 p-4 pt-6 border md:gap-10 sm:gap-8">
        <div className="flex flex-col w-4/5 gap-2 ">
          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            <RiBankLine size={22} /> Library
          </Link>
          <Link
            to="/search"
            className="flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            <BsSearch size={22} /> Search
          </Link>
          <Link
            to="/playlist"
            className="flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            <HiOutlineQueueList size={22} /> My Playlists
          </Link>
        </div>

        <Link className="flex items-center w-4/5 gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold">
          <BsPlusCircle size={20} /> Create Playlist
        </Link>

        <div className="flex flex-col w-4/5 gap-2 overflow-auto">
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
          <Link
            to="/playlist/id"
            className="px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
          >
            Playlist Name
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
