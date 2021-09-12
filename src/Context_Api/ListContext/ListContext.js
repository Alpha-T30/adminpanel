import { createContext, useReducer } from "react";
import ListReducer from "./ListReducer";

const initialState = {
  lists: [],
  isFeching: false,
  error: false,
};

export const ListContext = createContext(initialState);

export const ListContextProvider = ({ children }) => {
  // user:state.user, isFetching:state.isFetching, error:state.error

  const [state, dispatch] = useReducer(ListReducer, initialState);

  return (
    <ListContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ListContext.Provider>
  );
};
