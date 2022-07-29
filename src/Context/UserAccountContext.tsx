import { createContext, Dispatch, useReducer } from "react";

export interface ContextActionInterface {
  type: string;
  payload: string | number;
}

export interface StateInterface {
  loading: boolean;
  courseCompletion: number;
  courseEngagement: number;
  projectDegree: number;
  teamProjectDegree: number;
  expectedTypeWork: string;
  targetWorkCity: string;
  expectedContractType: string;
  expectedSalary: string;
  canTakeApprenticeship: number;
  education: string;
  courses: string;
  experience: string;
}

export interface ContextPropsInterface {
  state: StateInterface;
  dispatch: Dispatch<ContextActionInterface>;
}

const initialState: StateInterface = {
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
};

export const UserAccountContext = createContext<ContextPropsInterface>({
  state: initialState,
  dispatch: () => {},
});

const userAccountReducer = (
  state: StateInterface,
  action: ContextActionInterface,
) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_EXPECTED_TYPE_WORK":
      return { ...state, expectedTypeWork: action.payload };
    case "SET_TARGET_WORK_CITY":
      return { ...state, targetWorkCity: action.payload };
    case "SET_EXPECTED_CONTRACT_TYPE":
      return { ...state, expectedContractType: action.payload };
    case "SET_EXPECTED_SALARY":
      return { ...state, expectedSalary: action.payload };
    case "SET_CAN_TAKE_APPRENTICESHIP":
      return { ...state, canTakeApprenticeship: action.payload };
    case "SET_COURSES":
      return { ...state, courses: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    default:
      return state;
  }
};

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
