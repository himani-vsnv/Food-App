/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Image_Id } from '../utility/constant';

const RestaurentCard = ({listRest}) => {
  const imageData = Image_Id;
  
return(
    <div className='flex gap-4 '>
      {listRest?.map((items) => {
        const item = items.info;
        const dataImg = `${imageData}${item.cloudinaryImageId}`
        return (
         <div key={item.id} className='w-full bg-white border-2 shadow-lg flex flex-col gap-1 p-2 rounded'>
              <img className="w-30 h-40 " src={dataImg}
              alt='food image'/>
              <h1 className='text-wrap'>{item.name}</h1>
              <h1>{item.avgRating}</h1>
              <h1>{item.costForTwo}</h1>
         </div>
        );
      })}
    </div>
);
};
export default RestaurentCard;