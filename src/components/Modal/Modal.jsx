import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../icons";
import { style } from "../../utilits/style";

const Modal = ({setActive}) => {
    console.log(setActive, "aAA");
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white relative p-6 rounded pb-14">
        <button className="absolute right-6" onClick={() => setActive(false)}>{icons.exit}</button>
        <h1 className="text-RegisterGray text-center text-registerHead">
            Вход:
        </h1>

        <div className="flex flex-col text-start mt-5">
          <span className={`${style.registerLabel}`}>Эл. почта</span>
          <input type="text" className={`${style.registerInfo} w-registerInput`}/>
          <span className={`${style.registerLabel}`}>Пароль:</span>
          <input type="text" className={`${style.registerInfo} w-registerInput`}/>
          <Link className={`${style.registerLabel} pb-1  border-b-2`}>Забыли пароль?</Link>
        </div>
        <div className="flex justify-center mt-10 mb-7">
          <button className="flex items-center gap-5 px-20 py-3 bg-gray-700 text-white rounded">
            Войти
            {icons.arrow}
          </button>
        </div>
        <div className="text-center">
            <Link onClick={() => setActive(false)} to={'/registration'} className={`${style.registerLabel} pb-1 border-b-2`}>Еще нет аккаунта?</Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
