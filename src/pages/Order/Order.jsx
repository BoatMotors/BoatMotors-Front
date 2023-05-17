import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import Buyer from "../../components/Order/Buyer";

function Order() {
  return (
    <div className="px-[140px]">
      <BasketBox />
      <div>
        <Buyer />
      </div>
    </div>
  );
}

export default Order;
