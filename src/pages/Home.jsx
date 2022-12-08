import React from "react";
import { useEffect, useState } from "react";

import { ListItem } from "@/components";
import { getSavedSongs } from "@/api";

const Home = () => {
	const [songs, setSongs] = useState([]);
	useEffect(() => {
		getSavedSongs().then((res) => setSongs(res.items));
	}, []);

	return (
		<div className='w-full'>
			<h1>My Libaray</h1>
			{/* <div className="flex flex-row items-center w-11/12 h-16 gap-64 px-8 py-8 ml-8 text-white bg-gray">
        <p># Title</p>
        <p>Album Name </p>
        <p>Date Added </p>
        <p>Duration </p>
      </div> */}

			{songs.map((song, index) => (
				<ListItem
					key={song.id}
					index={index + 1}
					songName={song.track.name}
					artistName={song.track.artists[0].name}
					albumName={song.track.album.name}
					releasedDate={song.track.album.release_date}
					duration={song.track.duration_ms}
					img={song.track.album.images[0].url}
				/>
			))}
		</div>
	);
};

export default Home;
//for playlist name page//
