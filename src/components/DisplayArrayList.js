import React from 'react'
import './ArrayStyle.css'
// const heading={
//     color:'red'
// }
function DisplayArrayList({nameProps}) {
  return (
    <div>
       <h1 >This Is Heading</h1>
       <h1 className='primary'>Hello {nameProps.name} your Age is {nameProps.age}</h1>
    </div>
  )
}

export default DisplayArrayList