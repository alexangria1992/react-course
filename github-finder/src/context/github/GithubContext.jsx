//IMPORTS
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

//Context
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  //Reducer State
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //useReducer hook
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
