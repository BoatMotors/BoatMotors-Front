import React from "react";
import Header from "../../components/Header/Header";
import Maps from "../../components/Maps";
import Collective from "../../components/Collective";
import ReviewsForm from "../../components/Reviews/ReviewsForm";
import logo1 from './../../Assets/img/brands/logo1.png'
import logo2 from './../../Assets/img/brands/logo2.png'
import logo3 from './../../Assets/img/brands/logo3.png'
import logo4 from './../../Assets/img/brands/logo4.png'
import logo5 from './../../Assets/img/brands/logo5.png'
import logo6 from './../../Assets/img/brands/logo6.png'
import logo7 from './../../Assets/img/brands/logo7.png'
import logo8 from './../../Assets/img/brands/logo8.png'

const AboutUs = () => {
  return (
    <div>
      <Header
        BigTxt={"О нас"}
        SubTxt={"лодки & моторы"}
        fontStyle={"nordinRegular"}
      />
      <div className="px-[140px]">
        <div className="max-w-[888px] rounded-[20px] truncate pt-[126px]">
          <Maps />
        </div>
        <div className="absolute top-[750px] right-[100px] ">
          <div className="relative p-[42px]">
            <div className="z-50 relative">

            <div className="items-center flex ml-[30px]  z-50 text-white gilroyRegular text-[25px] text-center w-[487px]">ПРИВЕТСТВУЕМ ВАС, УВАЖАЕМЫЙ ПОКУПАТЕЛЬ!</div>
            <div className="w-[582px] z-50 text-white gilroyRegular relative pt-[30px] text-[18px]">
              Вы находитесь на сайте Интернет-магазина «МотоБот» — одного из
              крупнейших дилеров товаров для активного отдыха на рынке
              Санкт-Петербурга и Ленинградской области. Мы рады предложить нашим
              клиентам широчайший выбор лодок ПВХ и надувных лодок, подвесных
              лодочных моторов, а также товары для рыбалки и отдыха. Также в
              ассортименте нашего магазина представлены спортивный инвентарь,
              туристическое снаряжение и экипировка. Мы работаем напрямую с
              производителями представленных на сайте товаров, что обеспечивает
              возможность бесперебойных поставок и оперативное выполнение
              заказов даже в самый разгар туристического сезона. Мы постоянно
              регулярно пополняем наш ассортимент новыми моделями, но при этом
              внимательно следим за тем, чтобы все наши товары отличались
              безупречным качеством и высокими сроками службы. Надеемся, что
              предлагаемые нами условия заинтересовали вас! Желаем приятных
              покупок!
            </div>
            </div>
            <div className="bg-black opacity-50 z-0 h-[674px] w-[668px] absolute top-0 right-0"></div>
          </div>
        </div>
        <h2 className="text-registiration pt-[100px] text-BoatBlack">
        Наш коллектив
          </h2>
          <div className="mt-[75px] flex gap-[21px]">
            <div><Collective rank='Директор' number='8(812) 318 50-77'/></div>
            <div><Collective rank='Директор' number='8(812) 318 50-77'/></div>
          </div>
        <h2 className="text-registiration pt-[100px] text-BoatBlack">
        Наши бренды
          </h2>
          <div className="flex flex-wrap">
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo1} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo2} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo3} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo4} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo5} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo6} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo7} alt="" />
            </div>
            <div className="w-[250px]  justify-center overflow-hidden">
            <img className="w-[100%]" src={logo8} alt="" />
            </div>
          </div>
          <div className="mt-[100px]">
          <ReviewsForm />
          </div>
      </div>
    </div>
  );
};

export default AboutUs;
