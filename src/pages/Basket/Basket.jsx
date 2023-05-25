import React from "react";
import BasketBox from "../../components/Basket/BasketBox";
import BasketInfo from "../../components/Basket/BasketInfo";
import ReviewsForm from "../../components/Reviews/ReviewsForm";
import Header from './../../components/Header/Header'

const Basket = () => {
  return (
    <>
    <Header BigTxt={'MOTORSBOAT'} SubTxt={'лодки & моторы'} fontStyle={'nordinRegular'} />
    <div className="px-[140px]">
      <BasketBox />
      <BasketInfo />
      <ReviewsForm />
    </div>
    </>
  );
};

export default Basket;
