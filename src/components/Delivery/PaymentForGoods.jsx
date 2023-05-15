import React from "react";

function PaymentForGoods() {
  return (
    <div className="mt-[34px]">
      <div className="pl-[31px] pt-[47px] pr-[61px] pb-[40px] border-[1px] border-BorderInput mt-[17px] mb-[34px]">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Оплата товара
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          Если Вы находитесь в Санкт-Петербурге, то Вы можете совершить оплату
          наличными курьеру, при получении товара, либо можете приехать к нам в
          магазин и оплатить там. <br />
          <br /> Другой способ оплаты - банковский перевод. При оформлении
          заказа на сайте, система предложит Вам распечатать квитанцию, где уже
          будут заполнены все необходимые поля - нужно просто совершить оплату
          по этой квитанции в любом банке. В течении 3-х дней деньги поступят на
          наш счет, мы отвозим оплаченный товар в транспортную компанию и
          отправляем Вам подтверждение оплаты и номер накладной, по которому
          можно отслеживать ход посылки на сайте транспортной компании.
        </p>
      </div>
      <div className="pl-[31px] pt-[47px] pr-[61px] pb-[40px] border-[1px] border-BorderInput mt-[17px] mb-[34px]">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Оплата банковской картой
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          Оплата происходит через платежный шлюз ПАО СБЕРБАНК. При оплате заказа
          банковской картой, обработка платежа (включая ввод номера карты)
          происходит на защищенной странице процессинговой системы, которая
          прошла международную сертификацию. Это значит, что Ваши
          конфиденциальные данные (реквизиты карты, регистрационные данные и
          др.) не поступают в интернет-магазин, их обработка полностью защищена
          и никто, в том числе наш интернет-магазин, не может получить
          персональные и банковские данные клиента. При работе с карточными
          данными применяется стандарт защиты информации, разработанный
          международными платёжными системами Visa и MasterCard - Payment Card
          Industry Data Security Standard (PCI DSS), что обеспечивает безопасную
          обработку реквизитов Банковской карты Держателя. Применяемая
          технология передачи данных гарантирует безопасность по сделкам с
          Банковскими картами путем использования протоколов Secure Sockets
          Layer (SSL), Verified by Visa, Secure Code, и закрытых банковских
          сетей, имеющих высшую степень защиты. В случае возврата, денежные
          средства возвращаются на ту же карту, с которой производилась оплата.
        </p>
      </div>
      <div className="pl-[31px] pt-[47px] pr-[61px] pb-[40px] border-[1px] border-BorderInput mt-[17px] mb-[34px]">
        <p className="text-[25px] text-RegisterGrayBody font-semibold mb-4">
          Покупка в кредит
        </p>
        <p className="text-RegisterGrayBody text-base mb-4">
          Вы можете купить любой товар в кредит на выгодных условиях. Подробнее
          о кредитовании читайте на странице описания услуги "Покупка в кредит"
        </p>
      </div>
    </div>
  );
}

export default PaymentForGoods;