import React from "react";
import ListItem from "../components/ListItem";

const Home = () => {
  return (
    <div className="w-full">
      <h1 className=" py-8 text-3xl text-offWhite font-black ml-8">
        My Libaray
      </h1>
      <div className=" ml-8 w-11/12  flex flex-row  items-arround gap-24 bg-gray  text-white">
        <p className="pl-4 pr-4">#No</p>
        <p className="pl-4 pr-4">Title</p>
        <p className=" text-center pl-4 pr-4 mr-1">Album</p>
        <p className="pl-4 pr-4">Date Added</p>
        <p className="pr-4 pl-4">Duration</p>
      </div>
      <hr className="w-11/12  ml-8"></hr>
      <ListItem />
    </div>
  );
};

export default Home;
