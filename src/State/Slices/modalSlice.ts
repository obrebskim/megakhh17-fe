import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalInterface } from "../../Types/ModalInterface";

const initialState: ModalInterface = {
  isOpen: false,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state, action: PayloadAction<ModalInterface>) => {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = true;
      // eslint-disable-next-line no-param-reassign
      state.message = action.payload.message;
    },
    close: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.isOpen = false;
      // eslint-disable-next-line no-param-reassign
      state.message = "";
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice;
