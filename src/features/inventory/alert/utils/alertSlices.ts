import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface initialState {
  open: boolean;
  title?: "success" | "error" | "info";
  message?: string;
  allowAccessProductPage?: boolean;
}

const initialState: initialState = {
  open: false,
};

export const alertSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<initialState>) => {
      state.open = action.payload.open;
      state.allowAccessProductPage = action.payload.allowAccessProductPage;
      if (action.payload.message) state.message = action.payload.message;
      if (action.payload.title) state.title = action.payload.title;
      return state;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
