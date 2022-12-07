import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistData } from "@/api";
const Playlist = () => {
  //console.log("aaaaaaa");
  const param = useParams();
  console.log(param);
  const [data, setData] = useState("data");
  useEffect(() => {
    getPlaylistData(param.id).then ((res) => setData(res.items));
  }, []);
  console.log(data)

  return (
    <div className=" flex gap-5">
      <div className="w-40 h-40 drop-shadow-xl">
        <img src="{data.img}" alt="image" />
      </div>
      <div>
        <h1 className="font-bold text-7xl leading-normal text-white">
          Playlist Name
        </h1>
        <ul className="flex gap-3">
          <li>Playlist owner</li>
          <li>Total songs</li>
        </ul>
      </div>
    </div>
  );
};
export default Playlist;

