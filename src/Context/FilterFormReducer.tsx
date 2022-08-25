import { FilterFormContextStateInterface } from "../Types/FilterFormContextStateInterface";
import { FilterFormContextActionInterface } from "../Types/FilterFormContextActionInterface";

export default function filterFormReducer(
  state: FilterFormContextStateInterface,
  action: FilterFormContextActionInterface,
) {
  switch (action.type) {
    case "SET_COURSE_EVALUATION":
      return { ...state, courseEvaluation: action.payload };
    case "SET_ACTIVITY_EVALUATION":
      return { ...state, activityEvaluation: action.payload };
    case "SET_CODE_EVALUATION":
      return { ...state, codeEvaluation: action.payload };
    case "SET_TEAM_EVALUATION":
      return { ...state, teamEvaluation: action.payload };
    case "SET_WORKPLACE_PREFERENCE":
      return { ...state, workplacePreference: action.payload };
    case "SET_CONTRACT_PREFERENCE":
      return { ...state, contractPreference: action.payload };
    case "SET_SALARY_MIN":
      return { ...state, salaryMin: action.payload };
    case "SET_SALARY_MAX":
      return { ...state, salaryMax: action.payload };
    case "SET_INTERNSHIP_PREFERENCE":
      return { ...state, internshipPreference: action.payload };
    case "SET_EXPERIENCE":
      return { ...state, experience: action.payload };
    default:
      throw new Error();
  }
}
