import React from "react";
import { ListItem } from "@/components";

const Home = () => {
	return (
		<div className='w-full'>
			<h1>My Libaray</h1>
			<div className='flex flex-row items-center w-11/12 h-16 gap-64 px-8 py-8 ml-8 text-white bg-gray'>
				<p># Title</p>
				<p>Album</p>
				<p>Date Added</p>
				<p>Duration</p>
			</div>
			<ListItem />
		</div>
	);
};

export default Home;
//for playlist name page//
