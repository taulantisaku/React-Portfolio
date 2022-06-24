import React, { useReducer } from "react";

export interface ThemeContextType {
  state: any;
  dispatch: any;
}

const ThemeContextValues: ThemeContextType = {
  state: true,
  dispatch: null,
};

export const ThemeContext =
  React.createContext<ThemeContextType>(ThemeContextValues);

interface ThemeContextProviderProps {
  children: React.ReactNode | null;
}

//uncomment if needed
// interface ThemeContextProviderState {}

const INITIAL_STATE = { darkmode: false };

const themeReducer = (state: any, action: any) => {
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
