import React, { useState } from "react";
import { icons } from "../../icons";
import logo from "../../Assets/img/Logo.png";
import Modal from "../Modal/Modal";

const Navbar = () => {

  const [active, setActive] = useState(false);

  return (
    <nav className="flex w-screen px-36 bg-NavBackground">
      <div className="flex items-center justify-between w-full">
        <div className="">{icons.bars}</div>
        <div className="flex items-center justify-between w-7/12">
          <img src={logo} alt="logo" />
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-4">
              {icons.search}
              <input className="bg-inherit outline-none border-b-2 text-white" type="text" placeholder="Поиск" />
            </div>
            <button onClick={() => setActive(true)}>{icons.userInfo}</button>
            {active && <Modal setActive={setActive} />}
            <button>{icons.basket}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
