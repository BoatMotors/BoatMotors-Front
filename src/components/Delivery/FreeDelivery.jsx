import React from "react";
import banner1 from "../../Assets/img/BannerDelivery1.jpg";

function FreeDelivery() {
  return (
    <div className="mt-[24px]">
      <div className="p-6 border-[1px] border-BorderInput">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Бесплатная доставка заказов от 10000 рублей
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          В нашем магазине все заказы от 10000 рублей доставляются бесплатно по
          всей России. Бесплатная доставка распространяется на все способы
          доставки и сразу видна при оформлении заказа. Однако, есть несколько
          ограничений.
        </p>
        <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
          <li className="pl-6 mb-[15px] text-lg">
            Доставка СДЭКом и транспортными компаниями осуществляется до
            терминала или пункта выдачи в Вашем городе
          </li>
          <li className="pl-6 mb-[15px] text-lg">
            Товары по акции бесплатно доставляются только по Санкт-Петербургу, в
            другие регионы доставка по обычным тарифам
          </li>
          <p className="pl-6 text-lg">
            Не действует на лодки от компании WinBoat и все сани волокуши, по
            причине их габаритов,
            <br /> транспортировка рассчитывается индивидуально
          </p>
          <li className="pl-6 mb-[15px] text-lg">
            Доставка моторов Suzuki, Tohatsu и Mercury доставляются только по
            Санкт-Петербургу и Ленинградской области
          </li>
          <li className="pl-6 mb-[15px] text-lg">
            Жесткая упаковка при необходимости осуществляется за счёт
            покупателя, страхование груза при <br /> бесплатной доставке
            оплачивается нами
          </li>
          <li className="pl-6 mb-[15px] text-lg">
            Для дальних регионов России доставка рассчитывается индивидуально
          </li>
        </ul>
      </div>
      <p className="text-[25px] text-RegisterGrayBody font-semibold mb-[34px] mt-[48px]">
        Бесплатная доставка заказов от 10000 рублей
      </p>
      <img src={banner1} alt="" className="w-full" />
    </div>
  );
}

export default FreeDelivery;
