import { useState } from "react";

interface Car {
  year:number;
  model:string;
  company:string;
}

export const ArrayObject = () => {
  const [cars, useCars] = useState<Car[]>([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carCompany, setCompany] = useState("");
  const [carModel, setModel] = useState("");

  function addCar() {
    const newCar:Car = {  year: carYear, 
                      company: carCompany, 
                      model: carModel };
    console.log(newCar)

    useCars(c=>[...c, newCar]);
    setYear(new Date().getFullYear());
    setCompany('');
    setModel('')
  }

 function handleRemove(index){
  useCars(c=>c.filter((x,i)=>i!==index));                     
 }

  function handleYear(event){
    setYear(event.target.value)
  }
  function handleCompany(event){
    setCompany(event.target.value)
  }
   function handleModel(event){
    setModel(event.target.value)
  }


  return (
    <div className="bg-amber-100 flex flex-col items-center justify-center mt-3">
      <h1 className="font-bold text-5xl">Adder</h1>
      <ul>
        {cars.map((x, i) => (
          <li key={i} onClick={()=>handleRemove(i)}>{x.year} {x.company} {x.model} </li>
        ))}
      </ul>


      <div className="flex flex-col">
        <label htmlFor="" className="text-lg">Year: </label><input type="number"  onChange={(e)=>handleYear(e)} className="border-2 p-2 rounded text-2xl" value={carYear} />
        <label htmlFor="" className="text-lg">Company: </label><input type="text" onChange={(e)=>handleCompany(e)} className="border-2 p-2 rounded text-2xl"/>
        <label htmlFor="" className="text-lg">Model: </label><input type="text" onChange={(e)=>handleModel(e)} className="border-2 p-2 rounded text-2xl"/>
        <br />
        <button className="bg-blue-400 p-2 rounded-4xl px-3" onClick={addCar}> Add</button>
      </div>
    </div>
  );
};
