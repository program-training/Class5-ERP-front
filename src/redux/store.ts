import { configureStore } from "@reduxjs/toolkit";
import inventorySlice from "../features/inventory/productsDisplay/utils/inventorySlice";
import alertSlice from "../features/inventory/alert/utils/alertSlices";
import userSlice from "../features/users/userSlice";
import setOpenPageProducts from "../features/inventory/productsDisplay/utils/inventorySlice";

export const store = configureStore({
  reducer: {
    inventory: inventorySlice,
    alert: alertSlice,
    user: userSlice,
    setOpen: setOpenPageProducts,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
