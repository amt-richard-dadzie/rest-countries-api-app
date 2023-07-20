import { createContext, useReducer, useContext } from "react";

interface State {
  theme: string;
}

interface Provider {
  children: JSX.Element;
}

interface Actions {
  type: themeActions;
  payload: any;
}

interface ThemeType {
  state: State;
  dispatch: (action: Actions) => void;
}

const initialState = {
  theme: "light",
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export enum themeActions {
  setTheme,
}

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case themeActions.setTheme:
      return { ...state, theme: action.payload };
  }
};

export const ThemeProvider = ({ children }: Provider) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme should be used inside the ThemeProvider");
  }

  return context;
};
