import React from 'react';
import { sidebar } from '../../data';
import MenuModal from './MenuModal';
import { icons } from '../../icons';

const Sidebar = ({setShowMenu}) => {
    // console.log(sidebar, 'DDDDD');
    return (
        <div className={`fixed top-0 left-0 flex`}>
            <div className="bg-SideBackground w-[661px] h-screen relative p-6 rounded  pl-16 ">
                <button className="absolute z-10 right-6" onClick={() => setShowMenu(false)}>{icons.exit}</button>
                <div className="pt-36 flex flex-col gap-5 relative">
                    {sidebar?.map((submenu, ind) => <MenuModal key={ind} submenu={submenu} setShowMenu={setShowMenu} />)}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
