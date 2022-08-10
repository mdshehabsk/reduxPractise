import { API_CALL_FAILURE, API_CALL_START, API_CALL_SUCCESS } from "../constant/TodoConstant"

const initialState = {
    loader:false,
    todo:[],
    error:null
}
const TodoReducer = (state=initialState,action) => {
    switch(action.type) {
        case API_CALL_START:
            return{
                ...state,
                loader:true,
            }
        case API_CALL_SUCCESS :
            return{
                ...state,
                loader:false,
                todo:action.payload,
                error:null
            }
        case API_CALL_FAILURE :
            return{
                ...state,
                loading:false,
                todo:[],
                error:action.payload
            }
        default: 
        return state
    }
}

export default TodoReducer