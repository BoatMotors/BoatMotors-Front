import React, { useState } from 'react';
import MapProducts from './MapProducts';
import { products } from '../../data';
import Photo from '../../Assets/img/Photo.png';

const NewProduct = () => {

    const [active, setActive] = useState(true);

    return (
        <section className='mt-[105px] mb-36'>
            <div>
                <div className="flex gap-20 mb-16">
                    <button className={active ? 'text-BoatBlack text-ProductMenu' : `text-ProductMenu text-BoatGray`}>Новые поступления</button>
                    <button className='text-ProductMenu text-BoatGray'>Популярные</button>
                    <button className='text-ProductMenu text-BoatGray'>Акции</button>
                </div>
                <div className="flex justify-between flex-wrap gap-[83px]">
                    {products.map((item, index) => (
                        <MapProducts key={index} item={item} photo={Photo} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default NewProduct;
