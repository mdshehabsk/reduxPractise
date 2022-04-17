import './App.css';

import { useSelector, useDispatch } from 'react-redux';
function App() {
  const counter = useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const increament = ()=>{
    dispatch({type:'INC'})
  }
  const decreament = () =>{
    dispatch({type:'DEC'})
  }
  const add = () =>{
    dispatch({type:'ADD',payload:10})
  }
  return (
    <>
          <h1>counter</h1>
          <button onClick={increament} >increament</button>
          <h1> {counter} </h1>
          <button onClick={decreament} >decreament</button>
          <button onClick={add} >Add value</button>
    </>
  );
}

export default App;
