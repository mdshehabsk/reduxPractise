
import axios from "axios"

import { API_CALL_FAILURE, API_CALL_START, API_CALL_SUCCESS } from "../constant/TodoConstant"

const todoApiCall =  async (dispatch) => {
    dispatch({type:API_CALL_START})
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
        dispatch({type:API_CALL_SUCCESS,payload:res.data})
    }
    catch(err){
        dispatch({type:API_CALL_FAILURE,payload:err})
    }
}

export default todoApiCall