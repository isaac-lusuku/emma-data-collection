import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
};


export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    addId: (state, action)=>{
      if (state.userInfo){
        state.userInfo = [action.payload]
      }else{
        state.userInfo = [action.payload]
      }
    },
    removeId: (state, action) =>{
      state.userInfo = [];
    },
    
  },
});

export const {
  addId,
  removeId,
  
} = mainSlice.actions;
export default mainSlice.reducer;
