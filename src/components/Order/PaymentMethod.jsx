import React from "react";
import { style } from "../../utilits/style";

function PaymentMethod() {
  return (
    <div className={`${style.sectionsBorder} w-[530px] mt-6`}>
      <h1 className={`${style.sectionTitle}`}>Способ оплаты:</h1>
      <div className=" mb-[35px]">
        <div className="mb-4">
          <input type="radio" id="method1" name="paymentMethod" />
          <label
            htmlFor="method1"
            value="method1"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Оплата наличными или банковской картой при получении
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method2" name="paymentMethod" />
          <label
            htmlFor="method2"
            value="method2"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Оплата банковской картой на сайте
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method3" name="paymentMethod" />
          <label
            htmlFor="method3"
            value="method3"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Оплата в банке по квитанции
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method4" name="paymentMethod" />
          <label
            htmlFor="method4"
            value="method4"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Покупка в кредит
          </label>
        </div>
        <div className="mb-4">
          <input type="radio" id="method5" name="paymentMethod" />
          <label
            htmlFor="method5"
            value="method5"
            className={`${style.sectionSubTitle} pl-[24px]`}
          >
            Оплата для юридических лиц
          </label>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
