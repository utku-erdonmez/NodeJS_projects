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
        subscribe:(state,action)=>{
            const subscribedChannels=state.currUser.subscribedChannels;
            //action brings videos channel id
            if(!subscribedChannels.includes(action.payload)){
                subscribedChannels.push(action.payload)
            }
            else{
                subscribedChannels.splice(subscribedChannels.findIndex((channelId)=>channelId===action.payload),1)
            }
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout, subscription,subscribe} = userSlice.actions;
export default userSlice.reducer;