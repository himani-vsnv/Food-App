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
    const dataOfRest = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListRest(dataOfRest)
    console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }
  if(listRest === 0){
    return <ShimmerUi/>
  }
  const handleFiltered = () => {
    console.log("clicked")
    const filterData = listRest.filter((rest) => rest.info.avgRating >= 4.2)
    console.log(filterData)
    setListRest(filterData)
  }
  const handleSearched = () => {

  }  

  return (
        <div className="">
           <div className="flex gap-2 p-4">
              <div>
              <input placeholder="search" className="p-2 border"/>
                  <button onClick={() => handleSearched()} className="p-2 bg-slate-400 rounded">search</button>
              </div>
              <div>
                  <button onClick={handleFiltered} className="p-2 bg-violet-500 rounded">High Rate</button>
              </div>
           </div>
            <div >
               <RestaurentCard listRest={listRest} /> 
            </div>
        </div>
    )
}

export default Body;