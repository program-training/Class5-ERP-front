import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { adminProductInterface } from "../../interfaces/adminProductInterface";

interface InitialState {
  inventoryProducts: {
    allProducts: adminProductInterface[];
    filteredProducts: adminProductInterface[];
    chosenProduct: adminProductInterface | null;
    openProductPage: boolean;
  };
}

const initialState: InitialState = {
  inventoryProducts: {
    allProducts: [],
    filteredProducts: [],
    chosenProduct: null,
    openProductPage: false,
  },
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    setAllProducts: (state, action: PayloadAction<adminProductInterface[]>) => {
      state.inventoryProducts.allProducts = action.payload;
      return state;
    },
    setFilteredProducts: (
      state,
      action: PayloadAction<adminProductInterface[]>
    ) => {
      state.inventoryProducts.filteredProducts = action.payload;
      return state;
    },
    setChosenProduct: (state, action: PayloadAction<adminProductInterface>) => {
      state.inventoryProducts.chosenProduct = action.payload;
      return state;
    },
    setOpenPageProducts: (state, action: PayloadAction<boolean>) => {
      state.inventoryProducts.openProductPage = action.payload;
      return state;
    },
  },
});

export const {
  setAllProducts,
  setFilteredProducts,
  setChosenProduct,
  setOpenPageProducts,
} = inventorySlice.actions;

export default inventorySlice.reducer;
