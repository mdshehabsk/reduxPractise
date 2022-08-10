import axios from 'axios'
import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { get_user_end, get_user_faild, get_user_success } from './toolkit/slice/UserSlice'
const User = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const {loader,users,error} = user
    const userApiCall = async () => {
        try{
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch(get_user_end(res.data))
        }catch(err){
            dispatch(get_user_faild(err))
        }
    }
    useEffect(()=>{
        userApiCall()
    },[])
    
  return (
    <div className='app'>
        {
            loader && <h1>loading..</h1>
        }
        {
            !loader && users.map(user=><h1 key={user.id} > {user.name} </h1>)
        }
    </div>
  )
}

export default User