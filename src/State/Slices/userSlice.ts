import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../Types/UserInterface";

const initialState: UserInterface = {
  name: "",
  logged: false,
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInterface>) => {
      // eslint-disable-next-line no-param-reassign
      state.id = action.payload.id;
      // eslint-disable-next-line no-param-reassign
      state.name = action.payload.name;
      // eslint-disable-next-line no-param-reassign
      state.logged = true;
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.id = "";
      // eslint-disable-next-line no-param-reassign
      state.name = "";
      // eslint-disable-next-line no-param-reassign
      state.logged = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
