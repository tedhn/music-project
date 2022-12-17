import { FC } from "react";

const SubMenu = ({ setShowSubMenu, subMenuItems, handler }) => {
	console.log(subMenuItems);

	return (
		<div
			className='absolute text-sm z-10 w-48  shadow-md bg-black rounded-md py-4 flex flex-col justify-around gap-1'
			onMouseLeave={() => setShowSubMenu(false)}
			style={{
				top: 0,
				right: 200,
			}}>
			{subMenuItems.map((item) => (
				<div
					className='hover:bg-gray/50 px-2 py-1 text-white'
					key={item.id}
					onClick={() => handler(item.id)}>
					{item.name}
				</div>
			))}
		</div>
	);
};

export default SubMenu;
