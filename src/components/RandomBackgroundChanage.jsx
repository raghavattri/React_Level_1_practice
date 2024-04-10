import React, { useState } from 'react'

const RandomBackgroundChanage = () => {
    const randomcolors = ['white','black','blue','green','purple','beige'];
    const [background,setbackground]= useState('red');

     const handleClick =  ()=>{

        const randomindex =  Math.floor(Math.random()*randomcolors.length);
        const randomcolor =  randomcolors[randomindex];
        setbackground(randomcolor);
     }

  return (
    <div>
        <div
      style={{
        width: '200px',
        height: '200px',
        backgroundColor: background,
        border: '1px solid black',
        textAlign: 'center',
        lineHeight: '200px',
        cursor: 'pointer',
      }}
    >
      <button onClick={handleClick}>Click Me</button>
    </div>
    </div>
  )
}

export default RandomBackgroundChanage