import { useEffect, useState } from 'react';
import './App.css';
import {AiOutlinePlus} from 'react-icons/ai'
import TodoList from './TodoList';
import {query, collection, onSnapshot, updateDoc, doc, addDoc, deleteDoc} from 'firebase/firestore';
import {db} from './firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput]= useState('');

  //Create Todos
  const createTodo=async(e)=>{
    e.preventDefault(e);

    if(input===''){
      alert('Please enter a valid todo');
      return;
    }
    await addDoc(collection(db, 'todos'),{
      text: input,
      completed: false
    })
  }
  
  //Read Todos
  useEffect(()=>{
    const q = query(collection(db,'todos'));
    const unsubscribe = onSnapshot(q,(querySnapshot)=>{
      let todosArray=[];
      querySnapshot.forEach((doc)=>{
        todosArray.push({...doc.data(), id:doc.id})
      });
      setTodos(todosArray);
    });

    return()=>unsubscribe();
  },[])

  //Update Todos
  const toggleComplete=async(todo)=>{
    await updateDoc(doc(db,'todos',todo.id),{
      completed: !todo.completed
    })
  }

  //Delete Todos
  const deleteTodo = async(id)=>{
    await deleteDoc(doc(db,'todos',id))
  }


  return (
    <div className= "w-full h-screen p-4 bg-gradient-to-r from-blue-400 to-blue-700" >
      <div className='max-w-[500px] w-full m-auto bg-slate-100 rounded-lg p-2 shadow-lg mt-10'>
        <h1 className='text-3xl font-bold text-center text-gray-800 m-2'>Todos</h1>
        <form className='flex m-2 my-4' onSubmit={createTodo}>
          <input type='text' value={input} className='w-full border p-2 text-xl' placeholder='Add todo' onChange={(e)=>setInput(e.target.value)}/>
          <button className='border ml-2 p-4 bg-purple-500 text-slate-100 '><AiOutlinePlus size={30} /></button>
        </form>
        {todos.map(todo=><TodoList todo = {todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo} key={todo.id}/>)}
        {todos.length>0?(<p className='text-center text-lg p-2'>You have {todos.length} todos</p>):null}
      </div>
    </div>
  );
}

export default App;
