import React from "react";
import Header from "../../components/Header/Header";
// import ReviewSwiper from "../../components/Reviews/ReviewSwiper";
// import SwiperBox from "../../components/SwiperBox";
import Reviews from "../../components/Reviews/Reviews";

const ReviewPage = () => {
  // const arr = [{}, {}, {}, {}, {}, {}, {}];
  return (
    <div>
      <Header
        BigTxt={"Отзывы"}
        SubTxt={"лодки & моторы"}
        fontStyle={"gilroyRegular"}
      />
      <section className="flex  items-center w-full px-[140px]">
        <div className="">
          <h2 className="text-registiration pt-10 text-BoatBlack">
            Отзывы о магазине
          </h2>
          <p className="Gilroy font-bold text-RegisterGray">
            Рейтинг магазина: 4,6/5
          </p>
        </div>
      </section>
          <Reviews txt={true}/>
    </div>
  );
};

export default ReviewPage;
