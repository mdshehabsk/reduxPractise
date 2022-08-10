import React from 'react'
import './App.css';
import {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import todoApiCall from './redux/actions/TodoAction';
const Todo = () => {
    const dispatch = useDispatch()
  const {loader,todo,error} = useSelector(abc =>abc)
  useEffect(()=>{
    todoApiCall(dispatch)
  },[])
  return (
    <>
    <div className="App">
      {loader && <h1>Loading...</h1> }
      {error && <h1>error</h1>}
      {!loader && todo.map(todo=> <h1 key={todo.id} >{todo.title}</h1> )}
    </div>
    </>
  )
}

export default Todo