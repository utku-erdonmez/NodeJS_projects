import {createSlice} from "@reduxjs/toolkit"

const initialState={
    currComments:null,
    loading:false,
    error:false
}

export const commentSlice=createSlice({
    name:"comment",
    initialState,
    reducers:{
        fetchStart:(state)=>{
            state.loading=true;
            
        },
        fetchSuccess:(state,action)=>{
            state.loading=false
            state.currComments = action.payload;
        },
        fetchFailure:(state,action)=>{
            state.loading=false
            state.error = true;
        }
        
    }

});



export const { fetchStart, fetchSuccess, fetchFailure} = commentSlice.actions;
export default commentSlice.reducer;