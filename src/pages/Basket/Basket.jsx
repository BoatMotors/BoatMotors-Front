import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import BasketInfo from "../../components/Basket/BasketInfo";
import ReviewsForm from "../../components/Reviews/ReviewsForm";

const Basket = () => {
  return (
    <div className="px-[140px]">
      <BasketBox />
      <BasketInfo />
      <ReviewsForm />
    </div>
  );
};

export default Basket;
