import { createContext, useReducer } from "react";
import MovieReducer from "./MovieReducer";

const initialState = {
  movies: [],
  isFeching: false,
  error: false,
};

export const MovieContext = createContext(initialState);

export const MovieContextProvider = ({ children }) => {
  // user:state.user, isFetching:state.isFetching, error:state.error

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
