import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect, useContext } from "react";

import { ListItem, Card } from "../components";
import { handleSearch } from "@/api";

const Search = () => {
 HEAD
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

	const [searchData, setSearchData] = useState("");
	const [playlists, setPlaylists] = useState([]);
	const [tracks, setTracks] = useState([]);

	useEffect(() => {
		const getData = setTimeout(async () => {
			if (searchData !== "") {
				searchPlayers(searchData);
			}
		}, 1000);
		return () => clearTimeout(getData);
	}, [searchData]);

	const searchPlayers = async () => {
		const { playlists, tracks } = await handleSearch(searchData);

		setPlaylists(playlists.items);
		setTracks(tracks.items);
		// console.log("tracks", tracks);
	};
	// console.log("playlists", playlists);
	console.log("tracks", tracks);

	return (
		<div className='flex  flex-col justify-between h-full '>
			<div className='relative rounded-md  md:w-96'>
				<BsSearch className='absolute ml-3 text-black textbo top-3' />
				<input
					className='w-full  px-4 py-2 pl-10 border-none rounded-md outline-none text-dark shadow-xl bg-offwhite'
					// value="Search"
					value={searchData}
					onChange={(e) => setSearchData(e.target.value)}></input>
			</div>

			<div className='px-4 my-5  custom-scrollbars__content h-5/6'>
				{tracks.map((track, index) => (
					<ListItem
						key={track.id}
						index={index + 1}
						songName={track.name}
						artistName={track.artists[0].name}
						albumName={track.album.name}
						releasedDate={track.album.release_date}
						duration={track.duration_ms}
						img={track.album.images[0].url}
					/>
				))}
			</div>
>>>>>>> 40baf83659145cc1e79a5043c921f198ea53f9df

      <h3 className="my-5 text-3xl font-semibold">Albums</h3>

<<<<<<< HEAD
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
=======
			<div className='flex  flex-wrap px-12 md:justify-start justify-center w-full gap-4  custom-scrollbars__content h-2/5'>
				{playlists.map((playlist) => (
					<Card
						key={playlist.id}
						img={playlist.images[0].url}
						name={playlist.name}
						ownerName={playlist.owner.display_name}
					/>
				))}
			</div>
		</div>
	);
};

>>>>>>> 40baf83659145cc1e79a5043c921f198ea53f9df
export default Search;
