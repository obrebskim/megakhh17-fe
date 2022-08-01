import { createContext, Dispatch, useReducer } from "react";
import { UserAccountContextStateInterface } from "../Types/UserAccountContextStateInterface";
import { UserAccountContextActionInterface } from "../Types/UserAccountContextActionInterface";
import userAccountReducer from "./userAccountReducer";

const initialState: UserAccountContextStateInterface = {
  loading: true,
  courseCompletion: 5,
  courseEngagement: 3,
  projectDegree: 4,
  teamProjectDegree: 5,
  expectedTypeWork: "",
  targetWorkCity: "",
  expectedContractType: "",
  expectedSalary: "",
  canTakeApprenticeship: 0,
  education: "",
  courses: "",
  experience: "",
  tel: "+48 123 456 789",
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
  // @ts-ignore
  const [state, dispatch] = useReducer(userAccountReducer, initialState);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserAccountContext.Provider value={{ state, dispatch }}>
      {children}
    </UserAccountContext.Provider>
  );
}

export default UserAccountProvider;
