import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  title?: string;
  message?: string;
  open: boolean;
}

const initialState = {
  open: false,
  title: "Error",
  message: "",
};

export const errorSlice = createSlice({
  name: "Error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<initialState>) => {
      state.open = action.payload.open;
      if (action.payload.message) state.message = action.payload.message;
      if (action.payload.title) state.title = action.payload.title;
      return state;
    },
  },
});

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
