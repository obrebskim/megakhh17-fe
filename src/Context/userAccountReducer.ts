import { UserAccountContextStateInterface } from "../Types/UserAccountContextStateInterface";
import { UserAccountContextActionInterface } from "../Types/UserAccountContextActionInterface";

export default function userAccountReducer(
  state: UserAccountContextStateInterface,
  action: UserAccountContextActionInterface,
) {
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
    case "SET_PHONE":
      return { ...state, tel: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_BIO":
      return { ...state, bio: action.payload };
    default:
      return state;
  }
}
