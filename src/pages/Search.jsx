import React from "react";
import { BsSearch } from "react-icons/bs";

import { ListItem, Card } from "../components";

const Search = () => {
  return (
    <div className="flex  flex-col justify-between h-full ">
      <div className="relative rounded-md  md:w-96">
        <BsSearch className="absolute ml-3 text-black textbo top-3" />
        <input
          className="w-full  px-4 py-2 pl-10 border-none rounded-md outline-none text-dark shadow-xl bg-offwhite"
          // value="Search"
        ></input>
      </div>

      <div className="px-4 my-5  custom-scrollbars__content h-5/6">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>

      <h3 className="my-5 text-3xl font-semibold">Albums</h3>

      <div className="flex  flex-wrap px-12 md:justify-start justify-center w-full gap-4  custom-scrollbars__content h-2/5">
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
