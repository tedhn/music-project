import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";


function App() {
	return (
    <>
      <div className="App">
        <h1 className="text-6xl font-bold underline">Hello world!</h1>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Search/:query" element={<Search />} />
        <Route path="Playlist/:id" element={<Playlist/>} />
      </Routes>
    </>
  );
}

export default App;
