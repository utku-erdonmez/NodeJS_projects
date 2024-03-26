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
            state.currentUser = action.payload;
        },
        loginFailure:(state,action)=>{
            state.loading=false
            state.error = true;
        }, 
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = false;
        },
    }

});


export default userSlice.reducer;
export const { loginStart, loginSuccess, loginFailure, logout, subscription } = userSlice.actions;