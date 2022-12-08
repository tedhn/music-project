import React, { useContext } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getPlaylist } from "@/api";
import { UserContext } from "@/context/UserContext";

const Navbar = ({ setShowModal }) => {
	const { user, playlists, updatePlaylists } = useContext(UserContext);

	useEffect(() => {
		console.count("aaaaaaaa");
		playListDataGet();
	}, [user]);

	const playListDataGet = async () => {
		const playlistData = await getPlaylist();
		updatePlaylists(playlistData);
	};

	return (
		<div
			className='fixed top-0 col-span-2 row-span-5 shadow-lg bg-dark'
			style={{ height: "90vh" }}>
			<div className='flex flex-col items-center w-full h-full gap-4 p-4 pt-6 md:gap-10 sm:gap-8'>
				<div className='flex flex-col w-4/5 gap-2 '>
					<Link
						to='/'
						className='flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold'>
						<RiBankLine size={22} /> Library
					</Link>
					<Link
						to='/search'
						className='flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold'>
						<BsSearch size={22} /> Search
					</Link>
					<Link
						to='/playlist'
						className='flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold'>
						<HiOutlineQueueList size={22} /> My Playlists
					</Link>
				</div>

				<div
					onClick={() => setShowModal(true)}
					className='flex items-center w-4/5 gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md cursor-pointer md:text-base hover:bg-gray hover:text-gold'>
					<BsPlusCircle size={20} /> Create Playlist
				</div>

				{/* playList names */}
				<div className='flex flex-col w-4/5 gap-2 overflow-auto'>
					{playlists.map((playlist) => (
						<Link
							key={playlist.id}
							to={`/playlist/${playlist.id}`}
							className='px-4 overflow-hidden text-sm font-medium transition-all duration-300 ease-linear rounded-md whitespace-nowrap text-ellipsis md:text-base hover:bg-gray hover:text-gold'>
							{playlist.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
