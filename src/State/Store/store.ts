import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Slices/userSlice";
import modalSlice from "../Slices/modalSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    modal: modalSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectUser = (state: RootState) => state.user;
export const selectModal = (state: RootState) => state.modal;

export default store;
