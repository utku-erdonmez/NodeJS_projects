import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currVideo: {},
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.currVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.loading = false;
      state.error = true;
    },like:(state,action)=>{
    
      if(!state.currVideo.videoLikes.includes(action.payload)){
        state.currVideo.videoLikes.push(action.payload);
        state.currVideo.videoDislikes.splice(state.currVideo.videoDislikes.findIndex((userId)=>userId===action.payload),1);
        
      }
    },dislike:(state,action)=>{
      
      if(!state.currVideo.videoDislikes.includes(action.payload)){
        state.currVideo.videoDislikes.push(action.payload);
        state.currVideo.videoLikes.splice(state.currVideo.videoLikes.findIndex((userId)=>userId===action.payload),1);
      }
    }
  }
});

export const { fetchStart, fetchSuccess, fetchFailure,like,dislike} =
  videoSlice.actions;

export default videoSlice.reducer;