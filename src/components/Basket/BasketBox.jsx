import React from "react";
import TableItems from "./TableItems";

function BasketBox() {
  return (
    <div className="mt-[112px] mb-[100px]">
      <h1 className="text-[40px] font-semibold text-BoatBlack mb-[78px]">
        Корзина
      </h1>
      <div className="py-10 px-[100px] border-[1px] border-BorderInput mb-[24px] text-center">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-5">
          Корзина
        </p>
        <p className="text-[18px] text-RegisterGrayBody mb-[57px]">
          В корзине <b>1 товаров</b> на сумму <b>43 400 р.</b>
        </p>
        <table class="table-auto w-full">
          <thead className="border-b-[1px] border-b-RegisterGray ">
            <tr>
              <th class="table-cell text-left text-[18px] font-semibold text-RegisterGray pb-5">
                Изображение
              </th>
              <th class="table-cell text-left text-[18px] font-semibold text-RegisterGray ">
                Название
              </th>
              <th class="table-cell text-left text-[18px] font-semibold text-RegisterGray ">
                Кол-во
              </th>
              <th class="table-cell text-left text-[18px] font-semibold text-RegisterGray ">
                Цена за штуку
              </th>
            </tr>
          </thead>
          <TableItems />
        </table>
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-5 text-right">
          Итого: 43 400 р.
        </p>
      </div>
    </div>
  );
}

export default BasketBox;
