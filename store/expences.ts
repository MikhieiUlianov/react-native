import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ExpenceType = {
  id?: string;
  title: string;
  date?: string;
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
    setExpences: (state, action) => {
      const inverted = action.payload.reverse();
      return inverted;
    },
    removeExpence: (state, action) => {
      return state.filter((e) => e.id !== action.payload);
    },
    updateExpence: (state, action: PayloadAction<ExpenceType>) => {
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

export const { addExpence, removeExpence, updateExpence, setExpences } =
  actions;

export default reducer;
