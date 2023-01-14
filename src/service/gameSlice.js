import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  marks: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  player: 1,
  gameOver:false
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setmarks: (state, action) => {
      state.marks = action.payload;
    },

    setplayer: (state, action) => {
      state.player = action.payload;
    },
    setgameOver:(state,action)=>{
      state.gameOver = action.payload
    }
  },
});

export const { setmarks,setplayer,setgameOver } = gameSlice.actions

export default gameSlice.reducer
