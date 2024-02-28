import React, { useState } from 'react';
import "./App.css";
import Test from './componets/Test.js'
import TodoList from './componets/TodoList.js';

export const App = () => {
    const [listt , setListt] = useState([]);
    let addList = (input)=>{
        setListt([...listt,input]);
    }
    const deleteItem = (key)=>{
        let newListToDo = [...listt];
        newListToDo.splice(key,1)
        setListt([...newListToDo])
    }
  return (
    <div>
    <Test addList={addList} />
    <h1>ToDo</h1>
    <hr/>
    {
        listt.map((listitem, i)=>{
            return(
                <TodoList key={i} index={i} item={listt} deleteItem={deleteItem}/>
            )
        })
    }
    </div>
  )
}
export default App
