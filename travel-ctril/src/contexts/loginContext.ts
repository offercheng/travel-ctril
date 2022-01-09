import { createContext } from 'react';
import { authInitState, context } from './auth.type';

export const LoginContext = createContext<context>({
  state: "",
  dispatch :""
}) 




export const initState:authInitState = {
  userName: "",
  login: false,
}

export const loginReducer = (state = initState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: true,
        userName: action.user
      }
    case "LOGOUT":
      return {
        ...state,
        login: false,
      }  
    default:
      return state
  }
}



