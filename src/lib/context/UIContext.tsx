import React,{ createContext, useReducer } from "react";

export interface ThemeContextType {}

const ThemeContextValues: ThemeContextType = {};

interface ThemeContextProviderProps {
  children: React.ReactNode | null;
}
export const ThemeContext =
  React.createContext<ThemeContextType>(ThemeContextValues);

const INITIAL_STATE = { darkMode: false };

const themeReducer = (state:any, action:any) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  // const [
  //   /*state, setState*/
  // ] = useState<ThemeContextProviderState>({})

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
