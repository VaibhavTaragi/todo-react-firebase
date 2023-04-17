import React from 'react';
import {AiOutlineDelete} from "react-icons/ai";

const TodoList = ({todo, toggleComplete, deleteTodo}) => {
  return (
    <ul className='m-2'>
        <li className= {!todo.completed?'my-2 flex justify-between bg-slate-200 p-4 capitalize':'my-2 flex justify-between bg-slate-400 p-4 capitalize'}>
            <input type='checkbox' checked={todo.completed?true:false} onChange={()=>toggleComplete(todo)}/>
            <span onClick={()=>toggleComplete(todo)} className={!todo.completed?'w-full ml-2 text-lg cursor-pointer':'w-full ml-2 text-lg cursor-pointer line-through'}>{todo.text}</span>
            <button className='cursor-pointer fex items-center' onClick={()=>deleteTodo(todo.id)}><AiOutlineDelete/></button>
        </li>
    </ul>
  )
}

export default TodoList