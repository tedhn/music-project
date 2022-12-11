import React from "react";
import { DropDown } from ".";

const ListItem = ({
	songName,
	artistName,
	albumName,
	releasedDate,
	duration,
	img,
	index,
	songURI,
}) => {
	function dura(milliseconds) {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);

		seconds = seconds % 60;

		return `${minutes}:${seconds}`;
	}

	return (
		// listSection
		<div className='grid items-center justify-center grid-cols-12 hover:rounded-lg bg-gray hover:bg-offwhite/20 hover:text-gold hover:cursor-pointer'>
			{/* listItemLeft */}
			<div className='flex items-center justify-around'>
				<p className='mx-4'>{index}</p>
				<img
					src={img}
					alt='artist'
					// singerPic
					className='w-10 h-10'
				/>
			</div>
			<div className='col-span-4 mx-4 text-ellipsis whitespace-nowrap overflow-hidden w-[300px]'>
				<p>{songName}</p>
				<small>{artistName}</small>
			</div>

			{/* listItemData */}

			<p className='col-span-3'>{albumName}</p>
			<p className='text-center'>{releasedDate}</p>
			<p className='text-center'>{dura(duration)}</p>
			<p className='text-center'>...</p>
			<p className='text-center'>
				<DropDown songURI={songURI} />
			</p>
		</div>
	);
};

export default ListItem;
