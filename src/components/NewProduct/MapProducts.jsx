import React from "react";

const MapProducts = ({ item, photo }) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-ProductBackground">
          <img className="px-9 py-12" src={photo} alt="product" />
        </div>
        <div className="flex flex-col items-center mt-8 mb-3">
          <p>{item.title}</p>
          <p>{item.subtitle}</p>
        </div>
        <button className="w-full text-white text-ProductButton bg-ProductBackground">Купить</button>
      </div>
    </div>
  );
};

export default MapProducts;
