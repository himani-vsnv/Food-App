import React, { useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
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
    const dataOfRest = jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListRest(dataOfRest)
    console.log(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(listRest.length === 0){
    return <ShimmerUi/>
  }
    return (
        <div className="">
            <div>
                <button>High Rate</button>
            </div>
            <div >
               <RestaurentCard listRest={listRest} /> 
            </div>
        </div>
    )
}

export default Body;