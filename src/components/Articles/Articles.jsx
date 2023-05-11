import React from 'react';
import Boat1 from '../../Assets/img/BoatInfo1.png';
import Boat2 from '../../Assets/img/BoatInfo2.png';
import Boat3 from '../../Assets/img/BoatInfo3.png';

const Articles = () => {
    return (
        <section className='mt-[88px]'>
            <h2 className='text-registiration text-BoatBlack'>Статьи</h2>
            <div className="flex justify-between  mt-[117px]">
                <div className="w-[585px] h-[333px] px-[50px] flex flex-col items-center bg-white rounded-29 drop-shadow-BoatInfoBorder relative pt-[123px]">
                    <img className='absolute -top-[67px]' src={Boat1} alt="Boat info" />
                    <h3 className='text-ProductInfo text-RegisterGray'>ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ</h3>
                    <p className='text-ProductSubInfo text-RegisterGray mt-3'>Глиссирование является одним из самых экономичных вариантов передвижения.....</p>
                </div>
                <div className="w-[585px] h-[333px] px-[50px] flex flex-col items-center bg-white rounded-29 drop-shadow-BoatInfoBorder relative pt-[123px]">
                    <img className='absolute -top-[100px]' src={Boat2} alt="Boat info" />
                    <h3 className='text-ProductInfo text-RegisterGray'>ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ</h3>
                    <p className='text-ProductSubInfo text-RegisterGray mt-3'>Глиссирование является одним из самых экономичных вариантов передвижения.....</p>
                </div>
            </div>
            <div className="bg-ProductBackground relative flex flex-col items-center mt-[21px] justify-end rounded-29 h-[291px]">
                <img className='absolute -top-[81px]' src={Boat3} alt="Boat info" />
                <div className="mb-[49px]">
                    <h3 className='text-ProductInfo text-white'>ГЛИССИРОВАНИЕ НАДУВНЫХ ЛОДОК И ВСЁ ЧТО НУЖНО ЗНАТЬ ОБ ЭТОМ</h3>
                    <p className='text-ProductSubInfo text-white mt-3'>Глиссирование является одним из самых экономичных вариантов передвижения.....</p>
                </div>
            </div>
        </section>
    );
}

export default Articles;
