import React, { useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";

const Body = () => {
    const [listRest, setListRest] = useState([])
    const [search, setSearch] = useState("")
    console.log("search",search)
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
    const filterData = listRest.filter((rest) => rest.info.avgRating >= 4.2)
    setListRest(filterData)
  }
  const handleSearched = () => {
    const searchData = listRest.filter((rest) => listRest.info.name.include(search))
    console.log("searchData",searchData)
    setListRest(searchData)
  }  

  return (
        <div className="">
           <div className="flex gap-2 p-4">
              <div>
              <input type="text" value={search} placeholder="search" onChange={(e) => setSearch(e.target.value)} className="p-2 border"/>
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