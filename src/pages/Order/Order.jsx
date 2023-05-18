import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import Buyer from "../../components/Order/Buyer";
import DeliveryMethod from "../../components/Order/DeliveryMethod";
import OrderLocatiom from "../../components/Order/OrderLocatiom";

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
        </div>
      </div>
    </div>
  );
}

export default Order;
