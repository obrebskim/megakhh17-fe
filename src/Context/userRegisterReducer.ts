import { UserAccountContextActionInterface } from "../Types/UserAccountContextActionInterface";
import { UserRegisterContextStateInterface } from "../Types/UserRegisterContextStateInterface";

export default function userRegisterReducer(
  state: UserRegisterContextStateInterface,
  action: UserAccountContextActionInterface,
) {
  switch (action.type) {
    case "SET_REGISTER_TOKEN":
      return { ...state, registerToken: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_TEL":
      return { ...state, tel: action.payload };
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_BIO":
      return { ...state, bio: action.payload };
    case "SET_GITHUB_USERNAME":
      return { ...state, githubUsername: action.payload };
    case "SET_GITHUB_PHOTO_URL":
      return { ...state, githubPhotoUrl: action.payload };
    case "SET_PORTFOLIO_URLS":
      return { ...state, portfolioUrls: action.payload };
    case "SET_PROJECT_URLS":
      return { ...state, projectUrls: action.payload };
    case "SET_TARGET_WORK_CITY":
      return { ...state, targetWorkCity: action.payload };
    case "SET_EXPECTED_SALARY":
      return { ...state, expectedSalary: action.payload };
    case "SET_INTERNSHIP":
      return { ...state, canTakeApprenticeship: action.payload };
    case "SET_MONTHS_OF_COMMERCIAL_EXP":
      return { ...state, monthsOfCommercialExp: action.payload };
    case "SET_EDUCATION":
      return { ...state, education: action.payload };
    case "SET_WORK_EXERIENCE":
      return { ...state, workExperience: action.payload };
    case "SET_COURSES":
      return { ...state, courses: action.payload };
    default:
      throw new Error();
  }
}
