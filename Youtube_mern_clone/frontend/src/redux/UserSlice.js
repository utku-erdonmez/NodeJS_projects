import {createSlice} from "@reduxjs/toolkit"

const initialState={
    currUser:null,
    loading:false,
    error:false
}

export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true;
            
        },
        loginSuccess:(state,action)=>{
            state.loading=false
            state.currUser = action.payload;
        },
        loginFailure:(state,action)=>{
            state.loading=false
            state.error = true;
        }, 
        logout: (state) => {
            state.currUser = null;
            state.loading = false;
            state.error = false;
        },
    }

});



export const { loginStart, loginSuccess, loginFailure, logout, subscription } = userSlice.actions;
export default userSlice.reducer;