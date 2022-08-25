import React, { createContext, Dispatch, useMemo, useReducer } from "react";
import { FilterFormContextStateInterface } from "../Types/FilterFormContextStateInterface";
import { FilterFormContextActionInterface } from "../Types/FilterFormContextActionInterface";
import filterFormReducer from "./FilterFormReducer";

const initialState: FilterFormContextStateInterface = {
  courseEvaluation: "0",
  activityEvaluation: "0",
  codeEvaluation: "0",
  teamEvaluation: "0",
  workplacePreference: "5",
  contractPreference: "4",
  salaryMin: 0,
  salaryMax: 0,
  internshipPreference: 0,
  experience: 0,
};

interface ContextPropsInterface {
  state: FilterFormContextStateInterface;
  dispatch: Dispatch<FilterFormContextActionInterface>;
}

export const FilterFormContext = createContext<ContextPropsInterface>({
  state: initialState,
  dispatch: () => {},
});

interface PropsTypes {
  children: JSX.Element;
}

function FilterFormProvider({ children }: PropsTypes) {
  const [state, dispatch] = useReducer<React.Reducer<any, any>>(
    filterFormReducer,
    initialState,
  );
  return (
    <FilterFormContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state])}
    >
      {children}
    </FilterFormContext.Provider>
  );
}

export default FilterFormProvider;
