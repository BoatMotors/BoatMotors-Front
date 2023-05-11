import React from "react";
import Navbar from "../Navbar/Navbar";
import headerImg from "../../Assets/img/BoatMoto.jpg";
import { icons } from "../../icons";

const Header = ({BigTxt, SubTxt, fontStyle}) => {
  return (
    <div
      style={{ backgroundImage: `url(${headerImg})` }}
      className="w-screen h-screen bg-cover bg-no-repeat flex flex-col justify-end items-end"
    >
        <div>
          <Navbar />
        </div>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className={`text-homeHead font-homeHeadText text-white  text-9xl/[200px] ${fontStyle}`}>
            {BigTxt ? BigTxt : "MOTORSBOAT"}
          </h1>
          <h3 className="text-white text-homeSubHead mt-6">{SubTxt ? SubTxt : "лодки & моторы"}</h3>
          <button className="flex items-center gap-7 text-buttonText text-white border border-white py-4 px-10">
            Перейти в каталог {icons.arrow}
          </button>
        </div>
      </div>
      <div className="flex items-center gap-10 mr-36 mb-20">
        <p className="text-white">8(999) 159 69-67</p>
        <div className="">
          <p className="text-white">Время работы:</p>
          <p className="text-white">Пн-Вс 10-19</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
