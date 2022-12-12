import React from "react";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";

import { ListItem, Card } from "../components";
import { handleSearch, checkTracks } from "@/api";

const Search = () => {
	const [searchData, setSearchData] = useState("");
	const [playlists, setPlaylists] = useState([]);
	const [tracks, setTracks] = useState([]);
	const [isSaveList, setIsSaveList] = useState([]);

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

		const id = tracks.items.map((item) => item.id);
		console.log(id);

		const trackId = await checkTracks(id);

		setPlaylists(playlists.items);
		setTracks(tracks.items);
		setIsSaveList(trackId);
	};

	return (
		<div className='flex flex-col justify-start h-full '>
			<div className='relative rounded-md md:w-96'>
				<BsSearch className='absolute ml-3 text-black textbo top-3' />
				<input
					className='w-full px-4 py-2 pl-10 border-none rounded-md shadow-xl outline-none text-dark bg-offwhite'
					// value="Search"
					value={searchData}
					onChange={(e) => setSearchData(e.target.value)}></input>
			</div>

			{searchData.length === 0 ? (
				<div className='text-center mt-16 text-4xl font-bold'>
					Search Something{" "}
				</div>
			) : (
				<>
					<div className='px-4 my-5 custom-scrollbars__content'>
						{tracks.map((track, index) => (
							<ListItem
								key={track.id}
								trackId={track.id}
								index={index + 1}
								songName={track.name}
								artistName={track.artists[0].name}
								albumName={track.album.name}
								releasedDate={track.album.release_date}
								duration={track.duration_ms}
								img={track.album.images[0].url}
								isSave={isSaveList[index]}
								songURI={track.uri}
							/>
						))}
					</div>

					<h3 className='my-5 text-3xl font-semibold'>Albums</h3>

					<div className='flex flex-wrap justify-center w-full gap-4 px-12 md:justify-start custom-scrollbars__content h-2/5'>
						{playlists.map((playlist) => (
							<Card
								key={playlist.id}
								img={playlist.images[0].url}
								name={playlist.name}
								ownerName={playlist.owner.display_name}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default Search;
