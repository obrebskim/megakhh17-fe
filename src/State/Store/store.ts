import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user;

export default store;
