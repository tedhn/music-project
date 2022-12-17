import { FC, useState } from "react";
import SubMenu from "./SubMenuItem";

const MenuItem = ({ label, items, depth = 0, handler }) => {
	const [isShowSubMenu, setShowSubMenu] = useState(false);

	return (
		<div className='hover:bg-gray/50 px-2 py-1 text-white'>
			{items !== undefined ? (
				<div>
					<div onClick={() => setShowSubMenu(!isShowSubMenu)}>{label}</div>
					{isShowSubMenu && (
						<SubMenu
							setShowSubMenu={setShowSubMenu}
							subMenuItems={items}
							handler={handler}
						/>
					)}
				</div>
			) : (
				<div>{label}</div>
			)}
		</div>
	);
};

export default MenuItem;
