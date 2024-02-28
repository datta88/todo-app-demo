import React from 'react'
import './TodoList.css'
function TodoList(props) {
  return (
    <div>
        <li>
            {props.item}
            <span onClick={e=>{props.deleteItem(props.index)}}>
              <img src='./image/delete.png' className='delete-img' />
            </span>
        </li>
    </div>
  )
}

export default TodoList