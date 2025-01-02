import React, { useEffect, useState } from "react"
import RestaurentCard from "./RestaurentCard";
import ShimmerUi from "./ShimmerUi";
import { Api_Url } from "../utility/constant";
import { Link } from "react-router-dom";

const Body = () => {
    const [listRest, setListRest] = useState([])
    const [search, setSearch] = useState("")
    const [filterList, setFilterList] = useState([])
    console.log("search",search)
  useEffect(() => {
    fetchData()
  },[])
  const fetchData = async () => {
    const resp =await fetch(Api_Url)
    if (!resp.ok) {
        throw new Error(`Response status: ${resp.status}`);
      }
    const jsonData = await resp.json();
    const dataOfRest = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListRest(dataOfRest)
    setFilterList(dataOfRest)
    console.log(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0].info)
  }
  if(listRest === 0){
    return <ShimmerUi/>
  }
  const handleFiltered = () => {
    const filterData = listRest.filter((rest) => rest.info.avgRating >= 4.2)
    setListRest(filterData)
  }
  const handleSearched = () => {
    const searchData = filterList.filter((rest) => rest.info.name.toLowerCase().includes(search.toLowerCase())
  );
    console.log("searchData",searchData)
    console.log("search",search)
    setListRest(searchData)
    setSearch("");
  }  

  return (
        <div className="">
           <div className="flex gap-2 p-4">
              <div>
              <input type="text" value={search} placeholder="search..." name="search" onChange={(e) => setSearch(e.target.value)} className="p-2 border"/>
                  <button onClick={() => handleSearched()} className="p-2 bg-slate-400 rounded">search</button>
              </div>
              <div>
                  <button onClick={handleFiltered} className="p-2 bg-violet-500 rounded">High Rate</button>
              </div>
           </div>
            <div className="flex flex-wrap gap-2 p-2 m-2">
        {listRest?.map((rest) => (
          <Link key={rest.info.id} to={`/restMenu/${rest.info.id}`}>
            <RestaurentCard item={rest.info} />
          </Link>
        ))}
      </div>
        </div>
    )
}

export default Body;