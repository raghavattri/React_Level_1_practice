import React from 'react'

const listComponent = () => {

  const data =  ["first","second","third"];
  
  return (
    <div>
    <h1>list of all items</h1>
    <ul>
     {data && data.map((items)=>{
       return <li>the values of items are {items}</li>
     })}
    </ul>     
  </div>

  )
}

export default listComponent