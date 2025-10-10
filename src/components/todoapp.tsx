import { CheckCheck, CirclePlus, Edit, Trash } from "lucide-react";
import { useState, type ChangeEvent } from "react";
import { Button } from "./button";
import { toast } from "react-toastify";

export const ToDoApp: React.FC = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean[]>([]);

  function handleTask(e: ChangeEvent<HTMLInputElement>) {
    setTask(e.target.value);
  }

  function handleAddTask() {
    const trimmedTask = task.trim();

    const isDuplicate = tasks.some(
      (t) => t.toLowerCase() === trimmedTask.toLowerCase()
    );

    if (isDuplicate) return toast.info("Task already added!");

    if (trimmedTask === "") return toast.info("Please enter the TASK!");

    if (tasks.length <= 5) {
      setTasks((c) => [...c, trimmedTask]);
      setCompleted((prev) => [...prev, false]);
      setTask("");
      toast.success("Task added Succefully");
    } else if (tasks.length > 4) {
      toast.error("Please complete all other tasks to add more!");
      setTask("");
    }
  }

  function handleDelete(index: number) {
    setTasks(tasks.filter((_, i) => index !== i));

    setCompleted((prev) => prev.filter((_, i) => i !== index));

    toast.error("Task Deleted!");
  }

  function handleEdit(index: number) {
    setTask(tasks[index]);
    setTasks(tasks.filter((_, i) => index !== i));
  }

  function markAsCompleted(index: number) {
    setCompleted((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
    toast.success("Task marked as completed!");
  }

  return (
    <div className="m-15">
      <div className=" w-120 bg-white/65  rounded-br-3xl rounded-tl-3xl flex flex-col items-center p-5 mx-auto">
        <h1 className="text-7xl mb-10 mt-18 ">TO-DO-APP</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            className="border-2 p-2 w-2xs"
            placeholder="Enter new task...."
            value={task}
            onChange={(e) => handleTask(e)}
          />
          <button
            className="bg-green-950 border-2 border-black p-2 cursor-pointer text-white"
            onClick={handleAddTask}
          >
            <CirclePlus />
          </button>
        </div>

        <h1 className="text-3xl m-3 text-black mb-7 bg-white px-5 py-2 rounded-2xl">
          {tasks.length ? "Pending Tasks" : "Please add Tasks"}
        </h1>

        <ol
          className={`${
            tasks.length ? "block" : "hidden"
          } gap-3 w-[550px] bg-white p-5 rounded-bl-3xl mb-7 rounded-tr-3xl overflow-auto`}
        >
          {tasks.map((x, index) => (
            <li
              key={index}
              id={`i${index}`}
              className={`text-lg p-2 flex items-center justify-between border-[0.51px] mb-2 rounded transition-all duration-300
                         ${
                           completed[index]
                             ? "bg-gray-300 text-gray-600 line-through"
                             : "bg-white text-black"
                         }`}
            >
              {x}
              <div className="flex gap-1">
                <Button
                  icon={<Trash />}
                  className=" bg-gray-300/50 text-red-600 p-2 cursor-pointer border-[0.5px] box-border border-black "
                  fun={() => handleDelete(index)}
                />
                <Button
                  icon={<Edit />}
                  className=" bg-gray-300/50 p-2 text-blue-800 cursor-pointer border-[0.5px] box-border border-black"
                  fun={() => handleEdit(index)}
                  disabled={completed[index]}
                />
                <Button
                  icon={<CheckCheck />}
                  className=" bg-gray-300/40 p-2 text-green-700 border-[0.5px] box-border border-black cursor-pointer"
                  fun={() => markAsCompleted(index)}
                  disabled={completed[index]}
                />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
