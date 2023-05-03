import React from 'react';
import {style} from '../../utilits/style';
import { icons } from '../../icons';

const Registration = () => {

    const handleClickAdd = (e) => {
        e.preventDefault();
    }

    return (
        <section className='flex w-screen items-center justify-center pt-32'>
            <div className="w-registerContainer">
                <h2 className='text-registiration text-BoatBlack pb-16'>Регистрация</h2>
                <div className="border border-BorderInput px-12 pt-11 pb-20">
                    <h3 className='text-registerHead text-RegisterGrayBody mb-9'>Основная информация:</h3>
                    <form className='flex flex-col' action="">
                        <label className={`${style.registerLabel} flex justify-between`}>Фамилия:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Имя и отчество:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Телефон:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Email:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="email" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Пароль:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="password" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Подтвердите пароль:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="password" />
                        </label>
                    </form>
                </div>
                <div className="border border-BorderInput px-12 pt-11 mt-7 mb-16 pb-10">
                    <h3 className='text-registerHead text-RegisterGrayBody mb-9'>Наш адрес:</h3>
                    <form className='flex flex-col' action="">
                        <label className={`${style.registerLabel} flex justify-between`}>Страна:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Регион:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Город:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="text" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Индекс:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="email" />
                        </label>
                        <label className={`${style.registerLabel} flex justify-between`}>Адрес:
                            <input className={`${style.registerInfo} w-registerContainerInput`} type="password" />
                        </label>
                        <div className="flex justify-between items-center mt-5">
                            <label className={`${style.registerLabel} flex gap-14`}>Подписаться на новости:
                                <label className={`${style.registerLabel} flex gap-6`}>
                                    <input id='one' type="radio" />
                                    Да
                                </label>
                                <label className={`${style.registerLabel} flex gap-6`}>
                                    <input id='one' type="radio" />
                                    Нет
                                </label>
                            </label>
                            <button onClick={(e) => handleClickAdd(e)} className="flex items-center gap-5 px-14 py-3 bg-gray-700 text-white rounded">Продолжить {icons.arrow}</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Registration;
