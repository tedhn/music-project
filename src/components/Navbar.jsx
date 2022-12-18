import React, { useContext, useState } from "react";
import { BsPlusCircle, BsSearch } from "react-icons/bs";
import { RiBankLine } from "react-icons/ri";
import { HiOutlineQueueList } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getPlaylist } from "@/api";
import { UserContext } from "@/context/UserContext";

const Navbar = ({ setShowModal }) => {
	const { user, playlists, updatePlaylists } = useContext(UserContext);

	const [loading, setLoading] = useState(true);
	const [navLocation, setNavLocation] = useState(1);

	useEffect(() => {
		setLoading(true);
		playListDataGet();
		setLoading(false);
	}, [user]);

	const playListDataGet = async () => {
		const playlistData = await getPlaylist();
		updatePlaylists(playlistData);
	};

	const handleNavigate = (location) => {
		setNavLocation(location);
	};

	return (
		<div className='fixed top-0 col-span-2 h-screen  bg-dark '>
			<div className='flex flex-col items-center w-full h-full gap-4 p-4 pt-6 md:gap-10 sm:gap-8'>
				<div className='flex flex-col w-full gap-2 '>
					<Link
						onClick={() => handleNavigate(1)}
						to='/'
						className={
							navLocation === 1
								? "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base bg-gold text-dark"
								: "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
						}>
						<RiBankLine size={22} /> Library
					</Link>
					<Link
						to='/search'
						onClick={() => handleNavigate(2)}
						className={
							navLocation === 2
								? "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base bg-gold text-dark"
								: "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
						}>
						<BsSearch size={22} /> Search
					</Link>
					<Link
						to='/playlist'
						onClick={() => handleNavigate(3)}
						className={
							navLocation === 3
								? "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base bg-gold text-dark"
								: "flex items-center gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
						}>
						<HiOutlineQueueList size={22} /> My Playlists
					</Link>
				</div>

				<div
					onClick={() => setShowModal(true)}
					className='flex items-center w-full gap-4 px-4 py-2 text-sm font-medium transition-all duration-300 ease-linear rounded-md cursor-pointer md:text-base hover:bg-gray hover:text-gold'>
					<BsPlusCircle size={20} /> Create Playlist
				</div>

				{/* playList names */}
				<div className='flex flex-col w-full gap-2 overflow-auto'>
					{playlists.map((playlist, index) => (
						<Link
							key={playlist.id}
							to={`/playlist/${playlist.id}`}
							onClick={() => handleNavigate(3 + index + 1)}
							className={
								navLocation === 3 + index + 1
									? "flex items-center gap-4 px-4 py-1 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base bg-gold text-dark"
									: "flex items-center gap-4 px-4 py-1 text-sm font-medium transition-all duration-300 ease-linear rounded-md md:text-base hover:bg-gray hover:text-gold"
							}>
							{playlist.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
