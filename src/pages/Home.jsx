import React from "react";
import axios from "axios";
import { ListItem } from "@/components";
import { useEffect, useState } from "react";
// import { getSavedSongs } from "@/api";
import { data } from "autoprefixer";
// import HomeListItem from "@/components/homeListItem";
// import { data } from "autoprefixer";

const Home = () => {
  const [songData, setSongData] = useState([]);
  // const [tracks, setTrack] = useState([]);

  useEffect(() => {
    const getSavedSongs = async () => {
      const datas = await axios.post("http://localhost:3001/savedTracks", {
        offset: 0,
      });
      // console.log(datas.data);
      console.log("Hello", datas.data.items);

      setSongData(datas.data.items);
      // setTrack(datas.data.items[index].track);
    };
    getSavedSongs();
  }, []);
  console.log(songData);
  // console.log(tracks);
  // console.log(songData);
  // console.log(songData.added_at);
  // songData.track,
  // songData.added_at,
  // songData.track.disc_number
  // ListItem({ songtitle,artistName,albumName,dateAdded,duration,album.track.images });

  return (
    <div className="w-full">
      <h1>My Libaray</h1>
      <div className="flex flex-row items-center w-11/12 h-16 gap-64 px-8 py-8 ml-8 text-white bg-gray">
        <p># Title</p>
        <p>Album Name </p>
        <p>Date Added </p>
        <p>Duration </p>
      </div>
      {songData &&
        songData.map((song, index) => (
          <ListItem
            key={song.id}
            index={index + 1}
            dateAdded={song.album.release_date}
            songtitle={song.name}
            artistName={song.artist[0].name}
            duration={song.duration_ms}
            albumName={song.album.name}
            albumImage={song.album.images[0].url}
          />
        ))}
    </div>
  );
};

export default Home;
//for playlist name page//
