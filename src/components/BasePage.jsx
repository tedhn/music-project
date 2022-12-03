import React from "react";
import Navbar from "./navBar/Navbar";

const BasePage = ({ children }) => {
  return (
    <div className="col-start-3 col-end-13 row-span-5 bg-gray">{children}</div>
  );
};

export default BasePage;
