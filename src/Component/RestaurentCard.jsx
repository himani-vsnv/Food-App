/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Image_Id } from '../utility/constant';

const RestaurentCard = ({ item }) => {
  const dataImg = `${Image_Id}${item.cloudinaryImageId}`;

  return (
    <div className="w-full bg-white border-2 shadow-lg flex flex-col gap-1 p-2 rounded">
      <img className="w-30 h-20" src={dataImg} alt="food image"/>
      <h1 className="text-wrap">{item.name}</h1>
      <h1>Rating {item.avgRating}</h1>
      <h1>{item.costForTwo}</h1>
    </div>
  );
};

export default RestaurentCard;