import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ExpenceType = {
  id: string;
  title: string;
  date: string;
  price: number;
};

type InitialState = ExpenceType[];

const initialState: InitialState = [];

const expencesSlice = createSlice({
  name: "expences",
  initialState,
  reducers: {
    addExpence: (state, action) => {
      state.push(action.payload);
    },
    removeExpence: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    updateItem: (state, action: PayloadAction<ExpenceType>) => {
      const existingExpenceIndex = state.findIndex(
        (e) => e.id === action.payload.id
      );

      if (existingExpenceIndex !== -1) {
        state[existingExpenceIndex] = {
          ...state[existingExpenceIndex],
          ...action.payload,
        };
      }
    },
  },
});

const { actions, reducer } = expencesSlice;

export const { addExpence, removeExpence, updateItem } = actions;

export default reducer;
