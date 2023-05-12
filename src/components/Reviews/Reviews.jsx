import React from "react";
import Motor from "../../Assets/img/Motor.png";
import ReviewsForm from "./ReviewsForm";

const Reviews = () => {
  return (
    <div className="mt-[110px]">
      <h2 className="text-registiration mb-20">Последние отзывы</h2>
      <div className="flex justify-between mb-[212px]">
        <div className="hover:scale-110 duration-100 flex flex-col items-center text-center bg-white rounded-[10px] drop-shadow-ReviewsBorder w-[373px] px-16 py-10">
          <img src={Motor} alt="" />
          <h3 className="text-ReviewsTitle mt-8 mb-3  text-RegisterGray">Лодочный мотор HIDEA (Хайди) HD 9.9 FHS</h3>
          <p className="text-buttonText text-RegisterGray">Эксплуатирую 3 сезона</p>
        </div>
        <div className="hover:scale-110 duration-100 flex flex-col items-center text-center bg-white rounded-[10px] drop-shadow-ReviewsBorder w-[373px] px-16 py-10">
          <img src={Motor} alt="" />
          <h3 className="text-ReviewsTitle mt-8 mb-3  text-RegisterGray">Лодочный мотор HIDEA (Хайди) HD 9.9 FHS</h3>
          <p className="text-buttonText text-RegisterGray">Эксплуатирую 3 сезона</p>
        </div>
        <div className="hover:scale-110 duration-100 flex flex-col items-center text-center bg-white rounded-[10px] drop-shadow-ReviewsBorder w-[373px] px-16 py-10">
          <img src={Motor} alt="" />
          <h3 className="text-ReviewsTitle mt-8 mb-3  text-RegisterGray">Лодочный мотор HIDEA (Хайди) HD 9.9 FHS</h3>
          <p className="text-buttonText text-RegisterGray">Эксплуатирую 3 сезона</p>
        </div>
      </div>
      <ReviewsForm />
    </div>
  );
};

export default Reviews;
