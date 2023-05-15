import React from "react";
import { style } from "../../utilits/style";

function DeliverySDEK() {
  return (
    <div className="mt-[34px]">
      <div className="p-6 border-[1px] border-BorderInput mt-[17px] mb-[34px]">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Доставка транспортными компаниями и курьерской службой СДЭК
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          На следующий день, после отправки товара, Вам на эл. почту, указанную
          в заказе, придет сообщение с указанием транспортной компании, которой
          был отправлен груз или Вы можете позвонить нам и менеджер сообщит Вам
          всю интересующую Вас информацию относительно Вашего заказа. <br />{" "}
          <br /> О прибытии товара и адресе, где можно его забрать, Вам сообщит
          транспортная компания по телефону, в день прибытия заказа на терминал
          транспортной компании Вашего региона. Не забудьте взять с собой
          паспорт <br />
          <br /> Вот неполный список транспортных компаний с которыми мы
          работаем:
        </p>
        <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
          <li className={`${style.listStyleBold}`}>ТК ДЕЛОВЫЕ ЛИНИИ</li>
          <li className={`${style.listStyleBold}`}>ТК GTR</li>
          <li className={`${style.listStyleBold}`}>ТК ПЭК</li>
          <li className={`${style.listStyleBold}`}>ТК ЭНЕРГИЯ</li>
          <li className={`${style.listStyleBold}`}>ТК ВОЗОВОЗ</li>
          <li className={`${style.listStyleBold}`}>ТК СЕВЕРТРАНС</li>
          <li className={`${style.listStyleBold}`}>ТК ЖЕЛДОРЭКСПЕДИЦИЯ</li>
          <li className={`${style.listStyleBold}`}>Курьерская служба СДЭК</li>
          <li className={`${style.listStyleBold}`}>ПОЧТА РОССИИ </li>
        </ul>
        <p className="text-RegisterGrayBody text-base mb-4">
          Вы можете выбрать любую транспортную компанию или доверить этот выбор
          нам - мы уже несколько лет, каждый день, <br /> отправляем посылки в
          разные регионы РФ и сотрудничаем только с надежными компаниями.
        </p>
        <ul className="list-disc pl-12 mb-[42px] text-RegisterGrayBody">
          <li className={`${style.listStyleBold}`}>
            Стоимость доставки при заказе на сумму более 10000 руб. - бесплатно
          </li>
          <li className={`${style.listStyleBold}`}>
            Стоимость доставки при заказе на сумму менее 10000 руб. - по тарифам
            транспортной компании
          </li>
          <li className={`${style.listStyleBold}`}>
            Срок доставки - по срокам транспортной компании
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DeliverySDEK;
