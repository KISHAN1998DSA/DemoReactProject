import react from "react";

// function Welcome (){
//     return <h1>Welcome react</h1>
// }
const Welcome = (props) => {
    return(
    <div><h1>Welcome React {props.name} {props.surName}</h1>
    {props.children}
    </div>
    )
}
export default Welcome;
