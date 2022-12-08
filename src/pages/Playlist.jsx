import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistTracks } from "@/api";
import { ListItem } from "@/components";
import InfiniteScroll from "react-infinite-scroll-component";
const Playlist = () => {
  //console.log("aaaaaaa");
  const param = useParams();
  console.log(param);
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(Array.from({ length: 20 }));
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    getPlaylistTracks(param.id).then((data) => {
      console.log(data);
      setData(data);
    });
  }, []);

  const fetchMoredata = () => {
    if (offset.length < 200) {
      setTimeout(() => {
        setOffset(offset.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      setHasMore(false);
    }
  };

  //console.log(data);

  return (
    <>
      <div className=" flex gap-5">
        <div className="w-40 h-40 drop-shadow-xl">
          <img src="" alt="image" />
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
      <div style={{ height: 300, overflow: "auto" }} id="parentScrollDiv">
        <InfiniteScroll
          dataLength={offset.length}
          next={fetchMoredata}
          hasMore={hasMore}
          loader={<p>Loaing...</p>}
          scrollableTarget="parentScrollDiv"
        >
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
        </InfiniteScroll>
      </div>
    </>
  );
};
export default Playlist;
