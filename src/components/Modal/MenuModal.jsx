import React, { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../icons";
import { style } from "../../utilits/style";

const MenuModal = ({setShowMenu, submenu}) => {

  const [subMenuOpen, setSubMenuOpen] = useState(false);
  console.log(submenu.menu, 'AAAA');

    return (
      <aside>
        {/* <div className="relative"> */}
          <Link className="text-BoatBlack text-SidebarTitle" onClick={() => setSubMenuOpen(!subMenuOpen)}>{submenu.menu}</Link>

          <div className="absolute flex flex-col gap-3 right-0 top-36">
            {subMenuOpen && submenu?.item?.map((item, idx) => (
              <Link to={item.path} key={idx}>{item.name}</Link>
            ))}
          </div>
        {/* </div> */}
      </aside>
    )
};

export default MenuModal;
