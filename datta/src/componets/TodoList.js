import React from 'react'

function TodoList(props) {
  return (
    <div>
        <li>
            {props.item}
            <span onClick={e=>{props.deleteItem(props.index)}}>X</span>
        </li>
    </div>
  )
}

export default TodoList