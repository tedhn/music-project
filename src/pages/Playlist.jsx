import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPlaylistData, getPlaylistTracks } from "@/api";
import { ListItem } from "@/components";
// import InfiniteScroll from "react-infinite-scroll-component";
const Playlist = () => {
	const param = useParams();

	const [isLoading, setIsLoading] = useState(true);

	const [tracks, setTracks] = useState([]);
	const [playlistInfo, setPlaylistInfo] = useState(undefined);

	useEffect(() => {
		onload();
	}, []);

	const onload = async () => {
		const tracks = await getPlaylistTracks(param.id);
		const playlistInfo = await getPlaylistData(param.id);

		setTracks(tracks);
		console.log(playlistInfo);
		setPlaylistInfo(playlistInfo);
		setIsLoading(false);
	};

	return (
		<>
			{isLoading ? (
				<div>LOADING</div>
			) : (
				<>
					<div className=' flex gap-5'>
						<div className='w-40 h-40 drop-shadow-xl'>
							<img src={playlistInfo?.images[0].url} alt={"404"} />
						</div>
						<div>
							<h1 className='font-bold text-7xl leading-normal text-white'>
								{playlistInfo.name}
							</h1>
							<ul className='flex gap-3'>
								<li>Playlist Owner : {playlistInfo.owner["display_name"]}</li>
								<li>Total Songs : {playlistInfo.tracks.total}</li>
							</ul>
						</div>
					</div>
					<div className='mt-4'>
						{tracks.map((data, index) => (
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
				</>
			)}
		</>
	);
};
export default Playlist;
