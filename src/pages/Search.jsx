import React from "react";

import { ListItem, Card } from "../components";

const Search = () => {
  return (
    <div>
      <input
        className="w-64 p-1 mt-1 ml-8 rounded-md shadow-xl text-dark bg-offwhite"
        value="Search"
      ></input>

      <div>Playlist</div>
      <div className="w-4/5 mx-auto">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

      <div>Albums</div>

      <div className="w-4/5 gap-4 mx-auto flex justify-start flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Search;
