import { addToPlaylist } from "@/api";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem";

const DropDown = ({ songURI }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [anchorPoints, setanchorPoints] = useState({ x: 0, y: 0 });
	const { playlists } = useContext(UserContext);

	const menuRef = useRef();

	const handleAddtoPlaylist = async (playlistId) => {
		console.log(playlistId, songURI);
		addToPlaylist(playlistId, songURI);

		setIsOpen(false);
	};

	const handleClick = (e) => {
		console.log(anchorPoints);
		setanchorPoints({
			x: window.innerWidth - e.clientX,
			y: e.clientY,
		});
		setIsOpen(!isOpen);
	};

	return (
		<div
			className='flex flex-col items-center justify-center grow'
			ref={menuRef}>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				onClick={handleClick}
				className='flex items-center justify-center w-full px-2 py-1 mx-auto text-sm font-medium text-center bg-dark border-2 rounded-lg text-white border-gray'
				type='button'>
				<svg
					className='w-4 h-4 '
					aria-hidden='true'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 9l-7 7-7-7'></path>
				</svg>
			</button>

			{isOpen && (
				<div
					className='absolute text-sm z-10 w-48 shadow-md bg-black rounded-md py-4 flex flex-col justify-around gap-1'
					style={{ top: anchorPoints.y, right: anchorPoints.x }}>
					<MenuItem
						label='Go to song radio'
						// handler={() => handleNavigate("", "")}
					/>
					<MenuItem
						label='Go to song album'
						// handler={() => handleNavigate("album", selected.albumId)}
					/>
					<MenuItem
						label='Go to song Artist'
						// handler={() => handleNavigate("album", selected.artistId)}
					/>
					<hr />
					<MenuItem
						label='Add to playlist'
						items={playlists}
						depth={1}
						handler={handleAddtoPlaylist}
					/>
				</div>
			)}
		</div>
	);
};

export default DropDown;
