import React from "react";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const ErrorPage = () => {
	return (
		<div className='flex flex-col justify-center '>
			<div className='container flex justify-center mx-auto text-white mt-60'>
				<div className='text-center '>
					<p className='text-lg font-bold md:text-4xl sm:text-2xl'>Oops!</p>
					<h1 className='mt-2 text-xl font-bold md:text-5xl sm:text-4xl'>
						You've traveled quit far !!
					</h1>

					<Link
						to='/'
						className='flex items-center justify-center gap-2 p-2 mx-auto mt-6 text-sm font-semibold transition-all duration-300 ease-linear border md:text-base hover:bg-gray hover:text-goldw-60'>
						LET'S GO HOME <AiFillHome size={20} />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ErrorPage;
