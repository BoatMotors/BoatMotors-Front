import React from 'react';
import {icons} from '../../icons';
import CircleBoat from '../../Assets/img/CirclePhoto.png';

const ReviewsForm = () => {
    return (
        <section className='flex justify-between px-[140px]  mb-28'>
            <div className="flex flex-col items-center w-[440px] border border-BorderInput px-6 py-11">
                <h3 className='text-registerHead text-RegisterGrayBody'>Рассылка:</h3>
                <form className='flex flex-col mt-[21px] w-full' action="">
                    <label className='text-RegisterGrayBody text-registerBody mb-2' htmlFor="">Имя:</label>
                    <input className='p-2 text-registerBody mb-[21px] border border-BorderInput' type="text" />
                    <label className='text-RegisterGrayBody text-registerBody mb-2' htmlFor="">Email:</label>
                    <input className='p-2 text-registerBody border border-BorderInput' type="email" />
                    <button className='bg-ProductBackground flex items-center gap-6 text-white justify-center text-buttonText py-4 mt-[50px]'>Отправить {icons.arrow}</button>
                </form>
            </div>
            <div className="">
                <img src={CircleBoat} alt="Boat" />
            </div>
        </section>
    );
}

export default ReviewsForm;
