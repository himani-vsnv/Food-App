import { useEffect, useState } from "react";
import { Menu_Api } from "../utility/constant";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";

const RestMenu = () => {
    const [restInfo, setRestInfo] =  useState(null);
    const {restId} = useParams()
    useEffect(() => {
      fetchData();
    },[])
    const fetchData = async () => {
        const data = await fetch(`${Menu_Api}${restId}`);
        const json = await data.json();
        setRestInfo(json.data)
        // console.log(json.data)
    }
    if (restInfo===null) return <ShimmerUi/>;
    const item = restInfo?.cards[2]?.card?.card?.info;
    const {name,areaName,avgRating} = item;
    const itemMenu = restInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
    // console.log(restInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

    return(
        <div>
         <h1>Restaurent Name</h1>
         <p>{name}</p>
         <p>{avgRating}</p>
         <p>{areaName}</p>
         <hr/>
         {itemMenu?.map((items) =>
        <div key={items.card.info.id} className="flex gap-2">
            
            <p>{items.card.info.name}</p>
            <p>{items.card.info.category}</p>
            <p>Rs- {(items.card.info.defaultPrice)/100 || (items.card.info.price)/100}</p>
            
        </div>
         
    )}
        </div>
    );
};
export default RestMenu;