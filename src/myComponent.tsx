import { useState } from "react";

function Mycomponent(){

    const [name,setName] = useState('guest'); 
    const [age,setAge] = useState(10);
    const [isblocked,setisblocked] = useState(false)

    const toggle = ()=>{
        setisblocked(!isblocked)
    }

    const updateName = ()=>{
        setName('cezanne');
    }
    const updateAge = ()=>{
        setAge(pre=>pre+1)
    }
    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>set name</button>
            <p>Age: {age}</p>
            <button onClick={updateAge}>set name</button>
            <p>Active: {isblocked?'YES':'NO'}</p>
            <button onClick={toggle}>{isblocked?'Block':'Unblock'}</button>
        </div>
    )
}

export default Mycomponent;