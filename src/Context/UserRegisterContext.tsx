import React, { createContext, Dispatch, useReducer } from "react";
import { UserAccountContextActionInterface } from "../Types/UserAccountContextActionInterface";
import { UserRegisterContextStateInterface } from "../Types/UserRegisterContextStateInterface";
import userRegisterReducer from "./userRegisterReducer";

const initialState: UserRegisterContextStateInterface = {
  registerToken: "",
  email: "",
  tel: "",
  firstName: "",
  lastName: "",
  bio: "",
  githubUsername: "",
  githubPhotoUrl: "",
  portfolioUrls: "",
  projectUrls: "",
  targetWorkCity: "",
  expectedSalary: 0,
  canTakeApprenticeship: 0,
  monthsOfCommercialExp: 0,
  education: "",
  workExperience: "",
  courses: "",
};

export interface ContextPropsInterface {
  state: UserRegisterContextStateInterface;
  dispatch: Dispatch<UserAccountContextActionInterface>;
}

export const UserRegisterContext = createContext<ContextPropsInterface>({
  state: initialState,
  dispatch: () => {},
});

interface PropsTypes {
  children: JSX.Element;
}

function UserRegisterProvider({ children }: PropsTypes) {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    userRegisterReducer,
    initialState,
  );
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserRegisterContext.Provider value={{ state, dispatch }}>
      {children}
    </UserRegisterContext.Provider>
  );
}

export default UserRegisterProvider;
