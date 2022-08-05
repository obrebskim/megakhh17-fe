import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../Types/UserInterface";

const initialState: UserInterface = {
  name: null,
  logged: false,
  id: null,
  role: null,
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
      // eslint-disable-next-line no-param-reassign
      state.role = action.payload.role;
    },
    logout: (state) => {
      // eslint-disable-next-line no-param-reassign
      state.id = "";
      // eslint-disable-next-line no-param-reassign
      state.name = "";
      // eslint-disable-next-line no-param-reassign
      state.logged = false;
      // eslint-disable-next-line no-param-reassign
      state.role = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice;
