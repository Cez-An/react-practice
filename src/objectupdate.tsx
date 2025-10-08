import { useState } from "react";

export const ObjectUpdater = () => {
  const [car, setCar] = useState({ year: 2025, company: "BMW", model: "M2" });

  function handleYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleCompany(event) {
    setCar((c) => ({ ...c, company: event.target.value }));
  }

  function handleModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div className="bg-blue-200 w-screen h-screen flex align-middle justify-center">

      <div className="bg-amber-200 p-2 flex-col h-auto">

        <div className="gap-2 text-5xl mb-3 " >
          <p>Year: <span className="text-purple-700">{car.year}</span></p> 
          <p>Company: <span className="text-purple-700">{car.company}</span></p>
          <p>Model: <span className="text-purple-700">{car.model}</span> </p>
        </div>

        <div className="flex flex-col">

          <label htmlFor=""> Year</label> 
          <input className="border-2" type="number" value={car.year} onChange={(e) => handleYear(e)} /> 
          <label htmlFor="">Company</label> 
          <input className="border-2" type="text" onChange={(e) => handleCompany(e)} />
          <label htmlFor="">Model</label>
          <input className="border-2" type="text" onChange={(e) => handleModel(e)} />

        </div>

      </div>

    </div>
  );
};
