import { useState } from "react";

export function ArrayUpdater() {
  const [array, setArray] = useState(["apple", "banana", "peach", "mosambi"]);

  function handleAdd() {
    const newItem = document.getElementById("itemAdd").value;
    document.getElementById("itemAdd").value = "";
    setArray((a) => [...a, newItem]);
  }

  function handleDelete(index: any) {
    setArray(array.filter((_, ind) => ind !== index));
  }

  return (
    <div className="w-screen h-screen bg-green-100 flex flex-col items-center justify-center p-3">
      <div className="bg-amber-200 p-4">
        <h1 className="text-4xl mb-3 text-center">Food List</h1>
        <ul className="mb-3 text-center">
          {array.map((fruit, index) => {
            return (
              <li key={index} onClick={() => handleDelete(index)}>
                {fruit}
              </li>
            );
          })}
        </ul>

        <div className="gap-5 flex">
          <input className="border-2" id="itemAdd" type="text" />{" "}
          <button
            className="border-2 p-2 text-blue-400 bg-white"
            onClick={() => handleAdd()}
          >
            {" "}
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
