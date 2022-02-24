
import './App.css';
import { useState } from 'react'


function App() {
  const deletetodos = (id) => {
    setToDos((prev)=>{
      return prev.filter((value)=>value.id!==id);
    });
  }

const [toDos, setToDos] = useState([])
const [toDo, setToDo] = useState('')
 
return ( 
  <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      {console.log(toDo)}
      <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      {console.log(toDos)}
    </div>
    <div className="todos">
      {toDos.map((obj) => {
        return (
          <div className="todo">
            <div className="left">
              <input onChange={(e) => {
                console.log(e.target.checked);
                console.log(obj);
                setToDos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                  }
                  return obj2;
                }))
              }} value={obj.status} type="checkbox" name="" id="" />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => deletetodos(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        )
      })}
    </div>
  </div>
);
}

export default App;
