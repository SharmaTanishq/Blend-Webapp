import React, { ReactNode, createContext, useReducer } from "react";
import { modalReducer, userReducer } from "./reducers";
import { MODAL_ACTIONS, USER_ACTIONS } from "./actionType";

export type UserType = {
  name: string;
  email: string;
  spotifyId: string;
  _id: string;
};
export type ModalType = {
  isOpen: Boolean;
};

type InitialStateType = {
  user: UserType;
  modal: ModalType;
};

const initialState = {
  user: {} as UserType,
  modal: { isOpen: false } as ModalType,
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<USER_ACTIONS|MODAL_ACTIONS>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ user,modal }: InitialStateType, action: USER_ACTIONS|MODAL_ACTIONS) => ({
  user: userReducer(user, action as USER_ACTIONS),
  modal:modalReducer(modal,action as MODAL_ACTIONS)
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
