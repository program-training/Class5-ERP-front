import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "../features/inventory/inventorySlice";
import errorSlice from "../features/general/errorsSlice";

export const store = configureStore({
  reducer: { inventory: inventorySlice, error: errorSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
