import React from "react";
// import Motor from "../../Assets/img/Motor.png";
import ReviewsForm from "./ReviewsForm";
import ReviewSwiper from "./ReviewSwiper";
import SwiperBox from "../SwiperBox";

const Reviews = ({txt}) => {
  const arr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]
  return (
    <div className="mt-[110px]">
      <h2 className="text-registiration mb-20">{txt ? txt : 'Последние отзывы'}</h2>
      
      <ReviewSwiper slideContent={arr.map((index)=>(
        <SwiperBox className='transform: translatex(-3389px)' key={index}/>
        ))
    }/>
      <ReviewsForm />
    </div>
  );
};

export default Reviews;
