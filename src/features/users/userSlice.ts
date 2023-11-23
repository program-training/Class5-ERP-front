import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: string | null;
}

const initialState: InitialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
      return state;
    },
    getUser: (state) => {
      const token = localStorage.getItem("TOKEN");
      if (token !== null && token !== "undefined") state.user = "exist";
      else state.user = null;
      return state;
    },
  },
});

export const { setUser, getUser } = userSlice.actions;
export default userSlice.reducer;
