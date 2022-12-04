import React from "react";
import ListItem from "../components/ListItem";
import Card from "../components/Card";
const Home = () => {
  return (
    <div className="w-full">
      <h1>My Libaray</h1>
      <div className=" ml-8 w-11/12 h-16 px-8 py-8 flex flex-row  items-center gap-64 bg-gray  text-white">
        <p># Title</p>
        <p>Album</p>
        <p>Date Added</p>
        <p>Duration</p>
      </div>
      <ListItem />
    </div>
  );
};

export default Home;
