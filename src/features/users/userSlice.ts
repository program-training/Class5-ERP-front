import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  user: string | null;
}

const initialState: InitialState = {
  user: localStorage.getItem("erpUsername") || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user = action.payload;
      return state;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
