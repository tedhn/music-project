import React from "react";
import { Link } from "react-router-dom";
import ListItem from "../components/ListItem";
import Card from "../components/Card";
const Search = () => {
  return (
    <div>
      <input
        className="ml-8 mt-1 w-64 p-1 bg-offwhite rounded-md shadow-xl"
        value="Search"
      ></input>
      <ListItem />
      <Link to="/search">
        <button className="text-xs text-white ml-96 bg-offwhite p-1">
          Find More Songs
        </button>
      </Link>
      <Card />
    </div>
  );
};

export default Search;
