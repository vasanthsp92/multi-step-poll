import { createContext, useReducer, useState } from "react";
import Types from "./Type";

// Initial state for store
const initState = {
  questions: [],
  answers: [],
  activeIndex: 0,
};

// Store
const Store = createContext();


const StateProvider = ({ children }) => {
  const { Provider } = Store;
  const [prevActiveIndex, setPrevActvieIndex] = useState(0);
  const [state, dispatch] = useReducer((curState, action) => {
    switch (action.type) {
      case Types.SET_QUESTIONS:
        return {
          ...curState,
          questions: [...action.payload],
        };
      case Types.UPDATE_ANSWER:
        return {
          ...curState,
          answers: [...action.payload],
        };
      case Types.SET_ACTIVE_INDEX:
        setPrevActvieIndex(curState.activeIndex)
        return {
          ...curState,
          activeIndex: action.payload,
        };
      case Types.RESET_ANSWERS:
        setPrevActvieIndex(curState.activeIndex)
        return {
          ...curState,
          answers: [],
          activeIndex: 0,
        };
      default:
        throw new Error();
    }
  }, initState);
  return <Provider value={{ state, dispatch, prevActiveIndex }}>{children}</Provider>;
};

export { Store, StateProvider };
