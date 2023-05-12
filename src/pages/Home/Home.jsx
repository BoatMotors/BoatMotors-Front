import React from 'react';
import NewProduct from '../../components/NewProduct/NewProduct';
import Category from '../../components/Category/Category';
import Articles from '../../components/Articles/Articles';
import Reviews from '../../components/Reviews/Reviews';

const Home = () => {
    return (
        <div className="px-[140px]">
            <NewProduct />
            <Category />
            <Articles />
            <Reviews />
        </div>
    );
}

export default Home;
