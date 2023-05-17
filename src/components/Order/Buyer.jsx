import React from "react";
import { style } from "../../utilits/style";

function Buyer() {
  return (
    <div className={`${style.sectionsBorder} w-[618px]`}>
      <h1 className={`${style.sectionTitle}`}>Покупатель:</h1>
      <div className="flex">
        <div>
          <p className={`${style.sectionSubTitle}`}>
            Фамилия:<sup className="pl-4 font-bold">*</sup>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Buyer;
