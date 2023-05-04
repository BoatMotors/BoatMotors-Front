import React from 'react';
import NewProduct from '../../components/NewProduct/NewProduct';
import Category from '../../components/Category/Category';
import Articles from '../../components/Articles/Articles';

const Home = () => {
    return (
        <div className="px-[134px]">
            <NewProduct />
            <Category />
            <Articles />
        </div>
    );
}

export default Home;
