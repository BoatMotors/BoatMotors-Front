import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import Buyer from "../../components/Order/Buyer";
import OrderLocatiom from "../../components/Order/OrderLocatiom";

function Order() {
  return (
    <div className="px-[140px]">
      <BasketBox />
      <div>
        <Buyer />
        <OrderLocatiom />
      </div>
    </div>
  );
}

export default Order;
