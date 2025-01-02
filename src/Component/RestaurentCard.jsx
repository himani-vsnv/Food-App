/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Image_Id } from '../utility/constant';

const RestaurentCard = ({ item }) => {
  const dataImg = `${Image_Id}${item.cloudinaryImageId}`;

  return (
    <div className=" bg-white border-2 shadow-lg flex flex-col gap-1 p-2 rounded w-[280px] h-[350px]  md:w-1/2 lg:w-60 sm:w-1/4">
      <img className="w- h-32 rounded transition-transform duration-300 ease-in-out hover:scale-105" src={dataImg} alt="food image"/>
      <h1 className="text-lg font-semibold ">{item.name}</h1>
      <h1>Rating {item.avgRating}</h1>
      <h1> {item.cuisines.join(",")}</h1>
      <h1> {item.costForTwo}</h1>
    </div>
  );
};

export default RestaurentCard;