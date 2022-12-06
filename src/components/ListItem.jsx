import React from "react";
import { Link } from "react-router-dom";
// import "./listItem.css";
const ListItem = () => {
	return (
		// listSection
		<div className='grid items-center justify-center grid-cols-12 text-white hover:rounded-lg bg-gray hover:bg-offwhite/20 hover:text-gold'>
			{/* listItemLeft */}

			<p className='mx-4'>1</p>
			<img
				src='https://preview.redd.it/m2g632yc33171.jpg?width=640&crop=smart&auto=webp&s=4d766d90b83b2b97d5d874bcf01d86bbabc8131c'
				alt='artist'
				// singerPic
				className='w-10 h-10'
			/>
			<div className='col-span-5 text-start'>
				<p>Song Title</p>
				<small>Artist Title</small>
			</div>
			{/* listItemData */}

			<p className='col-span-2 '>Album Name</p>
			<p>Date Added</p>
			<p>Duration</p>
			<p>...</p>
		</div>
	);
};

export default ListItem;
