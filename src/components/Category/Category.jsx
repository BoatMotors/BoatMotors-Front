import React from 'react';
import { category } from '../../data';

const Category = () => {
    return (
        <section className='flex  items-center w-full'>
            <div className="">
                <h2 className='text-registiration text-BoatBlack'>Категории</h2>
                <div className="flex flex-wrap justify-between">
                    {category.map((item, index) => (
                        <div key={index} className="">
                            <img src={require(`../../Assets/img/${item.img}.png`)} alt="category" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Category;
