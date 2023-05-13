import React from "react";
import DeliveryPayment from "../../components/Delivery/DeliveryPayment";
import FreeDelivery from "../../components/Delivery/FreeDelivery";

const Delivery = () => {
  return (
    <div className="px-[140px]">
      <DeliveryPayment />
      <FreeDelivery />
    </div>
  );
};

export default Delivery;
