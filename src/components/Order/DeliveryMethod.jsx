import React from "react";
import { style } from "../../utilits/style";

function DeliveryMethod() {
  return (
    <div className={`${style.sectionsBorder} w-[530px]`}>
      <h1 className={`${style.sectionTitle}`}>Способ доставки:</h1>
      <div className=" mb-[35px]">
        <p className={`${style.sectionSubTitle}`}>Зарегистрироваться</p>
        <div className="mb-4">
          <input type="radio" id="method1" name="deliveryMethod" />
          <label
            htmlFor="method1"
            value="method1"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Самовывоз из магазина Волго-Донской пр., 1Е - бесплатно
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method2" name="deliveryMethod" />
          <label
            htmlFor="method2"
            value="method2"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Курьером по Санкт-Петербургу - бесплатно
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method3" name="deliveryMethod" />
          <label
            htmlFor="method3"
            value="method3"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Транспортная компания -
          </label>
        </div>
      </div>
    </div>
  );
}

export default DeliveryMethod;
