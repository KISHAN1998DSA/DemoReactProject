import React from 'react'

function ChildComponenet(props) {
  return (
    <div><button onClick={()=>props.greatHandler('child')}>Great Child</button></div>
  )
}

export default ChildComponenet