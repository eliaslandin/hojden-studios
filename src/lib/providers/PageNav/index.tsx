"use client";
import { createContext, useContext, useReducer } from "react";

type PageNavContext = {
  parent: string | null;
  pages: any[];
};

export const emptyContext: PageNavContext = {
  parent: null,
  pages: [],
};

const PageNavContext = createContext(emptyContext);
const DispatchContext = createContext({});

export const PageNavProvider = ({ children, pages }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      return { ...state, ...action.payload };
    },
    { pages, parent: null },
  );

  return (
    <PageNavContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </PageNavContext.Provider>
  );
};

export const usePageNavState = () => {
  const context = useContext(PageNavContext);
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
    setParent: (parent: string | null) =>
      //@ts-ignore
      context({
        payload: {
          parent,
        },
      }),
    setPages: (pages: Array<any>) =>
      //@ts-ignore
      context({
        payload: {
          pages,
        },
      }),
  };

  return actions;
};

export default PageNavContext;