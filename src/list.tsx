
 const List:React.FC = ()=>{

    const fruits = [{name:'apple'},{name:'grapes'},{name:'musambi'},{name:'banana'},{name:'pomagranate'}];

    const listsort = fruits.sort((a,b)=>b.name.localeCompare(a.name))

    const listItems = listsort.map((fruit)=> <li key={fruit.name} >{fruit.name}</li>)

    return(<ol>{listItems}</ol>)

}

export default List;


