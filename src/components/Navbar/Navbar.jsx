import React from "react";
import { icons } from "../../icons";
import logo from "../../Assets/img/Logo.png";

const Navbar = () => {
  return (
    <nav className="flex w-screen px-36 bg-NavBackground">
      <div className="flex items-center justify-between w-full">
        <div className="">{icons.bars}</div>
        <img src={logo} alt="logo" />
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4">
            {icons.search}
            <input className="bg-inherit outline-none border-b-2 text-white" type="text" placeholder="Поиск" />
          </div>
          {icons.userInfo}
          {icons.basket}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
