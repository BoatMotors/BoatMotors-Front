import React from "react";
import { style } from "../../utilits/style";
import { icons } from "../../icons";

function AddCommentary() {
  return (
    <div>
      <div className={`${style.sectionsBorder} mt-6`}>
        <h1 className={`${style.sectionTitle}`}>Комментарий</h1>
        <input
          className="p-2 text-registerBody border border-BorderInput w-full h-[126px]"
          type="text"
        />
      </div>
      <button className="bg-ProductBackground flex items-center gap-6 text-white justify-center text-buttonText py-4 px-[24px] mt-[40px] ">
        Оформить заказ{icons.arrow}
      </button>
    </div>
  );
}

export default AddCommentary;
