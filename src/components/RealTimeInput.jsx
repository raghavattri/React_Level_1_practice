import React, { useState } from 'react'

const RealTimeInput = () => {
    
    const [data,setdata]  = useState("");

    const handleChange = (e)=>{
      setdata(e.target.value);
    }

    return (
    <div>
        <div>
         <label htmlFor="">enter the data</label>
         <input type="text" onChange={handleChange} />
        </div>
        <div>
            <h1>The data is : </h1>
            <p>{data}</p>
        </div>
    </div>
  )
}

export default RealTimeInput