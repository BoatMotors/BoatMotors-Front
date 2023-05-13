import React from "react";
import DeliveryPayment from "../../components/Delivery/DeliveryPayment";
import DeliverySDEK from "../../components/Delivery/DeliverySDEK";
import FreeDelivery from "../../components/Delivery/FreeDelivery";
import OwnDeliveryService from "../../components/Delivery/OwnDeliveryService";
import PaymentForGoods from "../../components/Delivery/PaymentForGoods";
import PaymentRequizit from "../../components/Delivery/PaymentRequizit";

const Delivery = () => {
  return (
    <div className="px-[140px]">
      <DeliveryPayment />
      <FreeDelivery />
      <OwnDeliveryService />
      <DeliverySDEK />
      <PaymentForGoods />
      <PaymentRequizit />
    </div>
  );
};

export default Delivery;
