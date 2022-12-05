import React from "react";

import ListItem from "@/components/ListItem";
import Card from "@/components/Card";

const Search = () => {
	return (
		<div>
			<input
				className='w-64 p-1 mt-1 ml-8 rounded-md shadow-xl text-dark bg-offwhite'
				value='Search'></input>

			<div>Playlist</div>
			<ListItem />
			<ListItem />
			<ListItem />
			<ListItem />

			<div>Albums</div>

			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default Search;
