import React, { useRef } from 'react'

const UseRefExample = () => {
    const inputRef=useRef()
    const handleRef=()=>{
        console.log(inputRef,"Ref Handle");
        inputRef.current.focus()
        inputRef.current.placeholder='Enter the Name'
        inputRef.current.style='color:red'
        alert(inputRef.current.value)
    }
  return (
    <div>
        <input ref={inputRef}/>
        <button onClick={handleRef}>ChangeStyle</button>
    </div>
  )
}

export default UseRefExample