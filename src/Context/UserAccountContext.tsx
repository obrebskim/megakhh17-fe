import React, { createContext, Dispatch, useReducer } from "react";
import { UserAccountContextStateInterface } from "../Types/UserAccountContextStateInterface";
import { UserAccountContextActionInterface } from "../Types/UserAccountContextActionInterface";
import userAccountReducer from "./userAccountReducer";

const initialState: UserAccountContextStateInterface = {
  loading: true,
  courseCompletion: 0,
  courseEngagement: 0,
  projectDegree: 0,
  teamProjectDegree: 0,
  expectedTypeWork: "",
  targetWorkCity: "",
  expectedContractType: "",
  expectedSalary: 0,
  experienceMonths: 0,
  canTakeApprenticeship: 0,
  education: "",
  courses: "",
  experience: "",
  tel: "",
  email: "",
  bio: "",
};

export interface ContextPropsInterface {
  state: UserAccountContextStateInterface;
  dispatch: Dispatch<UserAccountContextActionInterface>;
}

export const UserAccountContext = createContext<ContextPropsInterface>({
  state: initialState,
  dispatch: () => {},
});

interface PropsTypes {
  children: JSX.Element;
}

function UserAccountProvider({ children }: PropsTypes) {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    userAccountReducer,
    initialState,
  );
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserAccountContext.Provider value={{ state, dispatch }}>
      {children}
    </UserAccountContext.Provider>
  );
}

export default UserAccountProvider;
