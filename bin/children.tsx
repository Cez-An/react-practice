import React from "react";

type Student = {
    name:string;
    age:number;
    isStudent:boolean;
}



const Student:React.FC <Student> = (props:Student) =>{
    const guest = <h1 className="welcome_guest">Welcome Guest</h1>
    const user = <h1 className="welcome_user">Welcome back {props.name}</h1>

    return (props.isStudent ? user : guest)

}

export default Student;