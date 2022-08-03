import { ChangeEvent, createContext } from "react";

interface FilterFormContextType {
  courseEvaluation: number;
  activityEvaluation: number;
  codeEvaluation: number;
  teamEvaluation: number;
  workplacePreferenceRemote: boolean;
  workplacePreferenceOffice: boolean;
  contractPreferencePermanent: boolean;
  contractPreferenceB2B: boolean;
  contractPreferenceMandate: boolean;
  contractPreferenceContract: boolean;
  salaryMin: number | null;
  salaryMax: number | null;
  internshipPreference: string | null;
  experience: number | null;
  setCourseEvaluation: (value: number) => void;
  setActivityEvaluation: (value: number) => void;
  setCodeEvaluation: (value: number) => void;
  setTeamEvaluation: (value: number) => void;
  setWorkplacePreferenceRemote: (value: boolean) => void;
  setWorkplacePreferenceOffice: (value: boolean) => void;
  setContractPreferencePermanent: (value: boolean) => void;
  setContractPreferenceB2B: (value: boolean) => void;
  setContractPreferenceMandate: (value: boolean) => void;
  setContractPreferenceContract: (value: boolean) => void;
  handleSetSalaryMin: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetSalaryMax: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetInternshipPreference: (e: ChangeEvent<HTMLInputElement>) => void;
  handleExperience: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FilterFormContext = createContext<FilterFormContextType | null>(null);

export default FilterFormContext;
