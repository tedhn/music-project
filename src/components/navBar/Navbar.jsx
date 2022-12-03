import React from "react";
import { BsEmojiSmileFill, BsPlusCircle, BsSearch } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  console.count("1");

  return (
    <div className="col-span-2 row-span-5 shadow-lg bg-dark">
      <div className="w-full h-full flex flex-col md:gap-10 sm:gap-8 gap-4 items-center p-4">
        <div>
          <BsEmojiSmileFill size={100} />
        </div>

        <div className="flex w-3/4 flex-col gap-6">
          <Link className="flex gap-4 items-center font-medium md:text-base text-sm">
            <RiBankLine size={22} /> Library
          </Link>
          <Link className="flex gap-4 items-center font-medium md:text-base text-sm">
            <BsSearch size={22} /> Search
          </Link>
          <Link className="flex gap-4 items-center font-medium md:text-base text-sm">
            <HiOutlineQueueList size={22} /> My Playlists
          </Link>
        </div>

        <Link className="flex w-3/4 gap-4 items-center font-medium md:text-base text-sm">
          <BsPlusCircle size={20} /> Create Playlist
        </Link>

        <div className="w-3/4 flex flex-col gap-3">
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
          <Link className="font-medium md:text-base text-sm">
            Playlist Name
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
