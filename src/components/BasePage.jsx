import React from "react";
import Navbar from "./Navbar";

const BasePage = ({ children }) => {
  return (
    <div className="col-start-3 col-end-13 row-span-5 bg-gray p-4">{children}</div>
  );
};

export default BasePage;
