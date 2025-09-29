import { configureStore } from "@reduxjs/toolkit";
import expences from "./expences";

const store = configureStore({ reducer: { expences } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
