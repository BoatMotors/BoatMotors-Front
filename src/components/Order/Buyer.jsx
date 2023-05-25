import React from "react";
import { style } from "../../utilits/style";

function Buyer() {
  return (
    <div className={`${style.sectionsBorder} w-[618px]`}>
      <h1 className={`${style.sectionTitle}`}>Покупатель:</h1>
      <div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Фамилия:
            <sup className="pl-4 font-bold text-red-700 text-4xl">.</sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Имя и отчество:
            <sup className="pl-4 font-bold text-red-700 text-4xl">.</sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="text"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Телефон:
            <sup className="pl-4 font-bold text-red-700 text-4xl">.</sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="phone"
          />
        </div>
        <div className="flex justify-between mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Email:
            <sup className="pl-4 font-bold text-red-700 text-4xl"></sup>
          </p>
          <input
            className="p-2 text-registerBody border border-BorderInput w-[363px]"
            type="email"
          />
        </div>
        <div className="flex justify-start mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>Зарегистрироваться</p>
          <div className="pl-[94px]">
            <input type="radio" id="yes" name="registrated" />
            <label
              htmlFor="yes"
              value="true"
              className={`${style.sectionSubTitle} pl-[24px]`}
            >
              Да
            </label>
          </div>
          <div className="pl-[56px]">
            <input type="radio" id="no" name="registrated" />
            <label
              htmlFor="no"
              value="false"
              className={`${style.sectionSubTitle} pl-[24px]`}
            >
              Нет
            </label>
          </div>
        </div>

        <div className="flex justify-start mb-[35px]">
          <p className={`${style.sectionSubTitle}`}>
            Согласие на обработку <br /> персональных данных
          </p>
          <div className="pl-[70px]">
            <input type="radio" id="ofertaYes" name="offerta" />
            <label
              htmlFor="ofertaYes"
              value="true"
              className={`${style.sectionSubTitle} pl-[24px]`}
            >
              Да
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buyer;
