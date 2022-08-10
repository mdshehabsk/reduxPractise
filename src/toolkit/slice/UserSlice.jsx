import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loader:true,
    users:[],
    error:null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers :{
        get_user_end : (state,action) => {
            state.loader = false
            state.users = action.payload
        },
        get_user_faild : (state,action) => {
            state.error = action.payload
            state.loader = true
            state.users = []
        }
    }
})
export const {get_user_success,get_user_end,get_user_faild} = userSlice.actions

export default userSlice.reducer