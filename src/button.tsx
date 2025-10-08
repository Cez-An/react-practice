import React from "react";

const Button:React.FC = ()=>{
    let number = 0;

    // function clicking() {
    //     number++;
    //     console.log(number)
    // }

    // function click(name){
    //     if(number<3){
    //         number++;
    //         console.log(`you have clicked me ${number} times`)
    //     }
    //     else {
    //         console.log(`you have clicked too many times`);
        
    //     }
        
    // }
    function handleClick(event){
        event.target.style.display = 'none';
        
    }

    return(
        <>
         <h1></h1>
        <button onClick={(event)=>handleClick(event)} className="button">Click Me</button>
        </>
       
    )
}


export default Button;