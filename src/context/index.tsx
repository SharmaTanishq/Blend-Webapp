import React, { ReactNode, createContext, useReducer } from "react";
import {

  userReducer,
} from "./reducers";
import {
  
  USER_ACTIONS,
} from "./actionType";



export type UserType={
  name:string;
  email:string;
  spotifyId:string;
  _id:string;
  
}

type InitialStateType = {
 
  user:UserType
};

const initialState = {  
  user:{} as UserType
  
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<
    USER_ACTIONS
  >;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { user }: InitialStateType,
  action: USER_ACTIONS
) => ({
  
  user:userReducer(user,action as USER_ACTIONS)
});

const AppProvider: React.FC<BaseLayoutProps> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

interface BaseLayoutProps {
  children?: ReactNode;
}

export { AppContext, AppProvider };
