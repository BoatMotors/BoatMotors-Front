import React from "react";
import { icons } from "../../icons";

function BasketInfo() {
  return (
    <div>
      <h1 className="text-[40px] text-BoatBlack font-semibold mb-[51px]">
        Воспользуйтесь дополнительными возможностями
      </h1>
      <p className="text-[18px] text-RegisterGrayBody mb-[53px]">
        Если у вас есть код купона на скидку или бонусные баллы, которые вы
        хотите <br /> использовать, выберите соответствующий пункт. <br />{" "}
        Также, можно (приблизительно) узнать стоимость доставки в ваш регион.
      </p>
      <div className="flex gap-9 mb-[99px]">
        <button className="bg-ProductBackground flex items-center gap-6 text-white justify-center text-buttonText py-4 px-[24px] ">
          Использовать купон на скидку {icons.arrow}
        </button>
        <button className="bg-ProductBackground flex items-center gap-6 text-white justify-center text-buttonText py-4 px-[24px] ">
          Узнать стоимость доставки{icons.arrow}
        </button>
      </div>
      <p className="text-[18px] text-RegisterGrayBody mb-[12px]">
        Стоимость: 43 400 р.
      </p>
      <p className="text-[18px] text-RegisterGrayBody mb-[12px]">
        Самовывоз из магазина Волго-Донской пр., 1Е: 0 р.
      </p>
      <p className="text-[18px] text-RegisterGrayBody  font-bold mb-[34px]">
        Итого: 0 р..
      </p>
      <button className="bg-ProductBackground flex items-center gap-6 text-white justify-center text-buttonText py-4 px-[24px] mb-[134px]">
        Оформление заказа{icons.arrow}
      </button>
    </div>
  );
}

export default BasketInfo;
