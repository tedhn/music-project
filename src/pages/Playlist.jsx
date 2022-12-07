import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistTracks } from "@/api";
const Playlist = () => {
  //console.log("aaaaaaa");
  const param = useParams();
  console.log(param);
  const [data, setData] = useState();
  useEffect(() => {
    getPlaylistTracks(param.id).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);
  console.log(data);

  return (
    <div className=" flex gap-5">
      <div className="w-40 h-40 drop-shadow-xl">
        <img src="" alt="image" />
      </div>
      <div>
        <h1 className="font-bold text-7xl leading-normal text-white">
          Playlist Name
        </h1>
        <ul className="flex gap-3">
          <li>Playlist owne</li>
          <li>Total songs</li>
        </ul>
      </div>
      {data.map((data, index) => (
        <ListItem
          key={data.id}
          index={index + 1}
          SongName={data.track.name}
          artistName={data.track.artists[0].name}
          albumName={data.track.album.name}
          img={data.track.album.images[0].url}
        />
      ))}
    </div>
  );
};
export default Playlist;
