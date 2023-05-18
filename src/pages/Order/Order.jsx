import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import Buyer from "../../components/Order/Buyer";
import DeliveryMethod from "../../components/Order/DeliveryMethod";
import OrderLocatiom from "../../components/Order/OrderLocatiom";
import PaymentMethod from "../../components/Order/PaymentMethod";

function Order() {
  return (
    <div className="px-[140px]">
      <BasketBox />
      <div className="flex justify-between">
        <div>
          <Buyer />
          <OrderLocatiom />
        </div>
        <div>
          <DeliveryMethod />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}

export default Order;
