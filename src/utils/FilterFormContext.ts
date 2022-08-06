import { ChangeEvent, createContext } from "react";

interface FilterFormContextType {
  courseEvaluation: number;
  activityEvaluation: number;
  codeEvaluation: number;
  teamEvaluation: number;
  workplacePreference: number;
  contractPreference: number;
  salaryMin: number;
  salaryMax: number;
  internshipPreference: number | null;
  experience: number;
  setCourseEvaluation: (value: number) => void;
  setActivityEvaluation: (value: number) => void;
  setCodeEvaluation: (value: number) => void;
  setTeamEvaluation: (value: number) => void;
  setWorkplacePreference: (value: number) => void;
  setContractPreference: (value: number) => void;
  handleSetSalaryMin: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetSalaryMax: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetInternshipPreference: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExperience: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterFormContext = createContext<FilterFormContextType | null>(null);

export default FilterFormContext;
