import { addToPlaylist } from "@/api";
import { UserContext } from "@/context/UserContext";
import React, { useContext, useEffect, useRef, useState } from "react";

const DropDown = ({ songURI }) => {
	const [isOpen, setIsOpen] = useState(false);

	const { playlists } = useContext(UserContext);

	const menuRef = useRef();

	const handleClick = async (playlistId) => {
		addToPlaylist(playlistId, songURI);

		setIsOpen(false);
	};

	return (
		<div
			className='relative flex flex-col items-center justify-center grow'
			ref={menuRef}>
			<button
				id='dropdownDefault'
				data-dropdown-toggle='dropdown'
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center justify-center w-full px-2 py-1 mx-auto text-sm font-medium text-center bg-dark border-2 rounded-lg text-white border-gray'
				type='button'>
				<svg
					className='w-1/4 h-4 '
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
					id='dropdown'
					className='absolute z-10 divide-y rounded shadow top-full bg-grey divide-gray '>
					<ul
						className='py-1 text-sm bg-dark text-white'
						aria-labelledby='dropdownDefault'>
						{playlists.map((playlist, index) => {
							return (
								<li
									key={index}
									onClick={() => handleClick(playlist.id)}
									className='block px-4 py-2 cursor-pointer hover:bg-offwhite/20 hover:text-gold hover:cursor-pointer'>
									{playlist.name}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DropDown;
