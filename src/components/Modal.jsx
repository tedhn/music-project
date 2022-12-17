import React, { useContext, useState } from "react";

import { createPlaylist } from "@/api";
import { UserContext } from "@/context/UserContext";

const Modal = ({ setShowModal }) => {
	const { user, playlists, addPlaylist } = useContext(UserContext);

	const [playlistName, setPlaylistName] = useState("");

	const handleCreatePlaylist = async () => {
		if (playlistName !== "") {
			const newPlaylist = await createPlaylist(playlistName, {});

			addPlaylist(newPlaylist);
			setShowModal(false);
		}
	};

	return (
		<div className='absolute top-0 left-0 z-10 w-full h-full'>
			<div className='fixed top-0 left-0 w-full h-full bg-black/80'>
				<div className='relative flex flex-col items-center justify-around w-1/2 gap-8 p-4 -translate-x-1/2 -translate-y-1/2 rounded-md bg-dark top-1/2 left-1/2'>
					<div className='text-4xl font-bold'>Create a playlist</div>
					<div className='flex items-center gap-4'>
						<div>Name</div>
						<input
							className='px-4 py-2 border-none rounded-md shadow-xl outline-none text-dark bg-offwhite'
							value={playlistName}
							onChange={(e) => setPlaylistName(e.target.value)}
						/>
					</div>

					<div className='flex gap-4'>
						<button
							onClick={() => setShowModal(false)}
							className='px-2 py-1 text-sm font-bold rounded-md cursor-pointer hover:bg-gray hover:text-gold'>
							Cancel
						</button>
						<button
							onClick={handleCreatePlaylist}
							className='px-2 py-1 text-sm font-bold border-none rounded-md cursor-pointer bg-gold text-dark '>
							Create
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
