import React from "react";
import LogoColor from "../../Assets/img/LogoColor.png";
import { icons } from "../../icons";
import { footerCatalog, footerMenu } from "../../data";
import { Link } from "react-router-dom";

const Footer = () => {

  const handleUp = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="h-0.5 bg-LineBackground mt-14 mb-20 mx-36"></div>
      <footer className="flex flex-col justify-center">
        <div className="flex w-full justify-evenly">
          <div className="flex flex-col items-center justify-start gap-3">
            <img src={LogoColor} alt="Logo" />
            <p className="flex items-center gap-[12px]">
              {icons.phone}8(999) 159 69-67
            </p>
            <div className="flex items-center justify-start gap-[12px]">
              <span>{icons.oclock}</span>
              <p className="flex flex-col items-center"><span>Пн-Вс</span> <span>С 10:00 - 19:00</span></p>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-footerText">О магазине</h3>
            <ul className="pl-5 py-3">
                {footerMenu.map((item, index) => (
                    <li className="pt-3" key={index}>
                        <Link className="text-registerBody text-BoatBlack" to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <h4 className="text-footerSubText">Новости:</h4>
            <div className="flex mt-8 gap-6">
                <span>{icons.vk}</span>
                <span>{icons.whatsapp}</span>
                <span>{icons.telegram}</span>
                <span>{icons.instagram}</span>
            </div>
          </div>
          <div className="mt-14">
            <h3 className="text-footerText">Каталог товаров</h3>
            <ul className="pl-5 py-3">
                {footerCatalog.map((item, index) => (
                    <li className="pt-3" key={index}>
                        <Link className="text-registerBody text-BoatBlack" to={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-3 mt-4">
                <Link>Прицепы, аксессуары для прицепов</Link>
                <Link>Смазки</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-52 mt-24 bg-FooterBackground h-[105px]">
            <button onClick={handleUp} className="flex items-center gap-[18px] text-white text-registerBody">Наверх {icons.up}</button>
            <span className="text-white text-registerBody">@Motorsboat, 2021</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
