"use client";
import { createContext, useContext, useReducer } from "react";

type StateContext = {
  isPending?: boolean;
  isActive?: boolean;
  events: any[];
  profiles: any[];
  pages: any[];
};

export const emptyContext: StateContext = {
  isActive: false,
  events: [],
  profiles: [],
  pages: [],
};

const StateContext = createContext(emptyContext);
const DispatchContext = createContext({});

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    return { ...state, ...action.payload };
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export const useSearchState = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    console.log("no context yet");
  }

  return context;
};

export const useDispatch = () => {
  const context = useContext(DispatchContext);
  if (context === undefined) {
    throw new Error("useDispatch must be used within a DispatchProvider");
  }

  const actions = {
    setResults: (results: Partial<StateContext>) =>
      //@ts-ignore
      context({
        payload: results,
      }),
  };

  return actions;
};

export default StateContext;