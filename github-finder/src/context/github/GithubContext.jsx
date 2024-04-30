//IMPORTS
import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

//Context
const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  //Reducer State
  const initialState = {
    users: [],
    loading: false,
  };

  //useReducer hook
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get intiial users (tesing purposes)
  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    // console.log(data);
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
