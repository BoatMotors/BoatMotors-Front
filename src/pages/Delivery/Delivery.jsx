import React from "react";
import DeliveryPayment from "../../components/Delivery/DeliveryPayment";
import FreeDelivery from "../../components/Delivery/FreeDelivery";
import OwnDeliveryService from "../../components/Delivery/OwnDeliveryService";

const Delivery = () => {
  return (
    <div className="px-[140px]">
      <DeliveryPayment />
      <FreeDelivery />
      <OwnDeliveryService />
    </div>
  );
};

export default Delivery;
