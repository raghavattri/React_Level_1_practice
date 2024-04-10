import React from "react";
import { useEffect,useState } from "react";



const ApiFetch = () => {
    
    const [data,setdata] =  useState();
     const limit =  10;
   useEffect(()=>{
    
    const fetchdata = async ()=>{

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      const data = await response.json();
      console.log(data);
      setdata(data.results);
    }

    fetchdata();
    },[])
  
   return(
    <div>
      <h3>APi data</h3>
      {data && data.map((res,index)=>{
        return <div key={index}>
           <ul>
            <li >The name of pokemon is {res.name}</li>
            <li>the pokemon details link : <a href={res.url}>pokemon url</a></li>
           </ul>
        </div>
      })}
    </div>
   )
  
}

export default ApiFetch