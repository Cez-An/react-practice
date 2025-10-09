
import { CirclePlus, DeleteIcon, Trash } from "lucide-react";
import { useState } from "react"


export const ToDoApp = ()=>{

    const [task,setTask] = useState('');
    const [tasks,setTasks] = useState<string[]>([]);

    function handleTask(e){
        setTask(e.target.value)
    }

    function handleAddTask (){
        setTasks(c=>[...c,task]);
        setTask('');
    }
    
    function handleDelete(index){
        setTasks(tasks.filter((_,i)=>index!==i))
    }

    return(
        <div className="bg-blue-300 h-screen flex flex-col items-center justify-center">

            <h1 className="text-4xl m-5">TO-DO-APP</h1>
            <div className="flex gap-5">
                <input type="text" className="border-2 p-2" placeholder="Enter new task...." value={task} onChange={(e)=>handleTask(e)}/>
                <button className="bg-green-300 rounded-full p-2 cursor-pointer" onClick={handleAddTask}><CirclePlus /></button>
            </div>

            <h1 className="text-3xl m-3">Tasks</h1>
            <ol>
                {tasks.map((x,i)=><>
                <li className="text-" key={i} >{x}</li> 
                <button className="bg-green-300 rounded-full p-2 cursor-pointer" onClick={()=>handleDelete(i)} ><Trash /></button></>)}
            </ol>
        </div>
    )
}