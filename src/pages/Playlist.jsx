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
	}, [param]);

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
				<div className='w-full text-center'>LOADING</div>
			) : (
				<>
					<div className='flex gap-5 '>
						<div className='w-40 h-40 drop-shadow-xl'>
							{playlistInfo.images.length !== 0 ? (
								<img src={playlistInfo.images[0]?.url} alt={"404"} />
							) : (
								<div className='flex items-center justify-center w-full h-full bg-dark text-7xl'>
									{playlistInfo.name.split("")[0]}
								</div>
							)}
						</div>
						<div>
							<h1 className='font-bold leading-normal text-white text-7xl'>
								{playlistInfo.name}
							</h1>
							<ul className='flex gap-3'>
								<li>Playlist Owner : {playlistInfo.owner["display_name"]}</li>
								<li>Total Songs : {playlistInfo.tracks.total}</li>
							</ul>
						</div>
					</div>
					{tracks.length === 0 ? (
						<div className='w-full text-center translate-y-20'>
							Start adding songs !
						</div>
					) : (
						<>
							<div className='mt-4'>
								{tracks.map((data, index) => (
									<ListItem
										key={data.id}
										index={index + 1}
										songName={data.track.name}
										artistName={data.track.artists[0].name}
										albumName={data.track.album.name}
										releasedDate={data.track.album.release_date}
										duration={data.track.duration_ms}
										img={data.track.album.images[0].url}
									/>
								))}
							</div>
						</>
					)}
				</>
			)}
		</>
	);
};
export default Playlist;
