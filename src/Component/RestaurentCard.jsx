import React, { useEffect, useState } from 'react'
import ShimmerUi from './ShimmerUi';

const RestaurentCard = () => {
  const [listRest, setListRest] = useState([])
  useEffect(() => {
    fetchData()
  },[])
  const fetchData = async () => {
    const resp =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
      }
    const jsonData = await resp.json();
    console.log(jsonData.data.cards[0].card.card.imageGridCards.info
    )
    setListRest(jsonData.data.cards[0].card.card.imageGridCards.info
    )
  }
  if(listRest === 0){
    return <ShimmerUi/>
  }
return(
    <div>
      {listRest.map((item, index) => {
        return (
         <div key={index}>
            <h1>{item.id}</h1>
         </div>
        );
      })}
    </div>
);
};
export default RestaurentCard;