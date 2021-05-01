import { createContext } from "react";

const INITIAL_CONTEXT_VALUE = {
  success: false,
  toggleSuccess: () => {},
};
export const AppContext = createContext(INITIAL_CONTEXT_VALUE);
