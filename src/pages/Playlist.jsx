import React from "react";

const Playlist = () => {
	console.log("aaaaaaa");

	return (
		<div className=' flex gap-5'>
			<div className='w-40 h-40 drop-shadow-xl'>
				<img src='' alt='image' />
			</div>
			<div>
				<h1 className='font-bold text-7xl leading-normal text-white'>
					Playlist Name
				</h1>
				<ul className='flex gap-3'>
					<li>Playlist owner</li>
					<li>Total songs</li>
				</ul>
			</div>
		</div>
	);
};

export default Playlist;
