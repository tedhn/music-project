import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

import { removeFromMySavedTracks, savedTracks } from "@/api";
import { DropDown } from "@/components";

const ListItem = ({
	songName,
	artistName,
	albumName,
	releasedDate,
	duration,
	img,
	index,
	trackId,
	isSave,
	songURI,
}) => {
	const [isLike, setIsLike] = useState(isSave);

	function dura(milliseconds) {
		let seconds = Math.floor(milliseconds / 1000);
		let minutes = Math.floor(seconds / 60);

		seconds = seconds % 60;

		return `${minutes}:${seconds}`;
	}

	const removeAdd = () => {
		console.log("asdfdsaf", isSave);
		if (isLike) {
			console.log("remove");
			setIsLike(false);
			removeFromMySavedTracks(trackId);
		} else {
			console.log("added");
			setIsLike(true);
			savedTracks(trackId);
		}
	};

	return (
		// listSection
		<div className='grid items-center justify-center grid-cols-12 hover:rounded-lg bg-gray hover:bg-offwhite/20 hover:cursor-pointer'>
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
			<div className='col-span-4 mx-4 text-ellipsis whitespace-nowrap w-[320px] overflow-hidden'>
				<p>{songName}</p>
				<small>{artistName}</small>
			</div>
			{/* listItemData */}
			<p className='col-span-3'>{albumName}</p>
			<p className='text-center'>{releasedDate}</p>
			<p className='text-center'>{dura(duration)}</p>
			<p className='text-center' onClick={removeAdd}>
				{isLike ? (
					<AiFillHeart color={"#FFD369"} />
				) : (
					<AiOutlineHeart color={"#FFD369"} />
				)}
			</p>{" "}
			<div className='flex flex-col items-center justify-center'>
				<DropDown songURI={songURI} />
			</div>
		</div>
	);
};

export default ListItem;
