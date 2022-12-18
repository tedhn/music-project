import React, { useContext } from "react";

import { Card } from "@/components";
import { UserContext } from "@/context/UserContext";
import { Navigate, useNavigate } from "react-router-dom";

const PlaylistHome = () => {
	const navigate = useNavigate();
	const { playlists } = useContext(UserContext);

	return (
		<div>
			<div className='text-6xl font-bold p-4'>My Playlists</div>
			<div className='flex flex-wrap justify-center w-full gap-4 px-12 md:justify-start custom-scrollbars__content '>
				{playlists.map((playlist) => (
					<div
						className='cursor-pointer'
						onClick={() => navigate(`${playlist.id}`)}>
						<Card
							key={playlist.id}
							img={playlist.images[0]?.url}
							name={playlist.name}
							ownerName={playlist.owner.display_name}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default PlaylistHome;
