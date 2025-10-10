import { useState } from "react"

export const Counter = ()=>{

    const [counter,setCounter] = useState(0);

    function increment(){
        setCounter(counter=>counter+1);
    }

    function decrement(){
        setCounter(counter=>counter-1);
    }

    function reset(){
        setCounter(0);
    }

    return (
        <div className="counter w-screen  h-screen flex items-center justify-center">

            <div className="bg-lime-400 p-20 rounded-2xl">

                <h1 className="text-center text-9xl">{counter}</h1>

            <div className="flex gap-6 ">

                <button  onClick={increment} className="bg-blue-300 p-4 rounded-2xl">Increment</button>
                <button onClick={reset} className="bg-white p-4 rounded-2xl">Reset</button>
                <button onClick={decrement} className="bg-red-200 p-4 rounded-2xl">Decrement</button>
            </div>
            </div>
            
        </div>
    )

}
