import React from "react";
import { style } from "../../utilits/style";

function OrderLocatiom() {
  return (
    <div className={`${style.sectionsBorder} w-[618px] mt-[24px]`}>
      <h1 className={`${style.sectionTitle}`}>Адрес доставки:</h1>
      <div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Страна
            <sup className="pl-4 font-bold text-red-700 text-4xl">.</sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Регион
            <sup className="pl-4 font-bold text-red-700 text-4xl"></sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Город
            <sup className="pl-4 font-bold text-red-700 text-4xl"></sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Адрес
            <sup className="pl-4 font-bold text-red-700 text-4xl"></sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderLocatiom;
