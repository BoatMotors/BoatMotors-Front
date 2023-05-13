import React from "react";
import banner2 from "../../Assets/img/BannerDelivery2.jpg";
import { style } from "../../utilits/style";

function OwnDeliveryService() {
  return (
    <div className="mt-[34px]">
      <div className="p-6 border-[1px] border-BorderInput">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Собственная курьерская служба
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          Мы доставим Вам товар не позднее двух суток с момента заказа, конечно
          если этот товар есть у нас на складе. Если товара в <br /> данный
          момент нет на складе, то время ожидания Вам сообщит наш менеджер.
          Обратите внимание - доставку мы <br /> обеспечиваем только до подъезда
          и на этаж не поднимаем!
        </p>
        <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
          <li className={`${style.listStyleBold}`}>
            Стоимость доставки при заказе на сумму более 10000 руб. - бесплатно
          </li>
          <li className={`${style.listStyleBold}`}>
            Стоимость доставки при заказе на сумму менее 10000 руб. - 500 руб.
          </li>
          <li className={`${style.listStyleBold}`}>
            Срок доставки 1-2 дня при наличии товара на складе
          </li>
        </ul>
      </div>
      <div className="p-6 border-[1px] border-BorderInput mt-[17px] mb-[34px]">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Самовывоз из магазина, Волго-Донской проспект, 1Е
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          Также Вы можете забрать товар сами в нашем магазине по адресу, который
          указан на сайте (Санкт-Петербург, Волго-Донской проспект, 1Е).
        </p>
        <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
          <li className={`${style.listStyleBold}`}>
            Стоимость самовывоза - бесплатно для любых заказов
          </li>
          <li className={`${style.listStyleBold}`}>
            Срок доставки в магазин 0-2 дня при наличии товара на складе
          </li>
        </ul>
      </div>
      <img src={banner2} alt="" className="w-full" />
    </div>
  );
}

export default OwnDeliveryService;
