import React from "react";
import { Link } from "react-router-dom";
// import "./listItem.css";
// ListItem({ songtitle,artistName,albumName,dateAdded,duration,album.track.images};
const HomeListItem = ({
  albumImage,
  trackNumber,
  songtitle,
  artistName,
  albumName,
  dateAdded,
  duration,
}) => {
  return (
    // listSection
    <div className="hover:rounded-lg  w-11/12 h-16 px-8 py-8 flex flex-row  items-center gap-20 bg-gray hover:bg-offwhite text-white hover:text-gold">
      {/* listItemLeft */}
      <div className="flex flex-row justify-center items-center gap-8">
        <p>{trackNumber}</p>
        <img
          src={albumImage}
          alt={artistName}
          // singerPic
          className="w-10 h-10"
        />
        <div>
          <p>{songtitle}</p>
          <small>{artistName}</small>
        </div>
      </div>
      {/* listItemData */}
      <div className="flex flex-row items-center justify-evenly gap-32">
        <p>{albumName}</p>
        <p>{dateAdded}</p>
        <p>Duration</p>
        <p>... {duration}</p>
      </div>
    </div>
  );
};

export default HomeListItem;
