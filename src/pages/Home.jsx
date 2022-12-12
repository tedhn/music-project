import React from "react";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import { ListItem } from "@/components";
import { getSavedSongs } from "@/api";

const Home = () => {
	const [songs, setSongs] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		fetchSongs();
	}, []);

	const fetchSongs = async () => {
		getSavedSongs(songs.length).then((res) => {
			setTotal(res.total);
			setSongs([...songs, ...res.items]);
		});
	};

	return (
		<div className='w-full'>
			<h1 className='text-6xl font-bold p-4'>My Libaray</h1>

			<InfiniteScroll
				dataLength={songs.length}
				next={fetchSongs}
				hasMore={songs.length < total}
				loader={<h4>Loading...</h4>}
				className='mt-4 p-6'>
				{songs.map((song, index) => (
					<ListItem
						key={song.track.id}
						index={index + 1}
						songName={song.track.name}
						artistName={song.track.artists[0].name}
						albumName={song.track.album.name}
						releasedDate={song.track.album.release_date}
						duration={song.track.duration_ms}
						img={song.track.album.images[0].url}
						songURI={song.track.uri}
					/>
				))}
			</InfiniteScroll>
		</div>
	);
};

export default Home;
//for playlist name page//
