import React from 'react'

function FnctionClick() {
   function CheckClick(){
        console.log("Hello")
    }
  return (
    <div>
        <button onClick={CheckClick}>Click</button>
    </div>
  )
}

export default FnctionClick