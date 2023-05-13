import React from "react";

function DeliveryPayment() {
  return (
    <div className="mt-[125px] flex justify-between">
      <div>
        <h1 className="text-[40px] font-semibold text-BoatBlack mb-[71px]">
          Доставка, оплата
        </h1>
        <div className="p-6 border-[1px] border-BorderInput w-[618px]">
          <p className="text-[25px] text-RegisterGrayBody font-semibold mb-8">
            Доставка
          </p>
          <p className="text-RegisterGrayBody text-[18px] mb-4">
            В Санкт-Петербурге
          </p>
          <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
            <li className="pl-6 mb-[8px] text-lg">
              Самовывоз из магазина, Волго-Донской проспект, 1Е
            </li>
            <li className="pl-6 mb-[8px] text-lg">
              Курьерская доставка по Санкт-Петербургу
            </li>
          </ul>
          <p className="text-RegisterGrayBody text-[18px] mb-4">
            Другие регионы России
          </p>
          <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
            <li className="pl-6 mb-[8px] text-lg">Курьерской компанией СДЭК</li>
            <li className="pl-6 mb-[8px] text-lg">Транспортной компанией</li>
          </ul>
          <p className="text-RegisterGrayBody text-[18px] mb-4">Казахстан</p>
          <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
            <li className="pl-6 mb-[8px] text-lg">Транспортной компанией</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="p-6 border-[1px] border-BorderInput mb-[24px] w-[530px]">
          <p className="text-[25px] text-RegisterGrayBody font-semibold mb-8">
            Способ оплаты:
          </p>
          <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
            <li className="pl-6 mb-[8px] text-lg">
              Оплата наличными или банковской картой при получении
            </li>
            <li className="pl-6 mb-[8px] text-lg">
              Оплата банковской картой на сайте
            </li>
            <li className="pl-6 mb-[8px] text-lg">
              Оплата в банке по квитанции
            </li>
            <li className="pl-6 mb-[8px] text-lg">Покупка в кредит</li>
            <li className="pl-6 mb-[8px] text-lg">
              Оплата для юридических лиц
            </li>
          </ul>
        </div>
        <div className="p-6 border-[1px] border-BorderInput w-[530px]">
          <p className="text-[25px] text-RegisterGrayBody font-semibold mb-8">
            Расчет отправки транспортными компаниями:
          </p>
          <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
            <li className="pl-6 mb-[8px] text-lg">Деловые линии</li>
            <li className="pl-6 mb-[8px] text-lg">ЖелДорЭкспедиция</li>
            <li className="pl-6 mb-[8px] text-lg">ПЭК</li>
            <li className="pl-6 mb-[8px] text-lg">GTD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPayment;
