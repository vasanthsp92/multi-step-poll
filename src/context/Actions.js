import TYPES from "./Type";

export const setQuestions = (data) => ({
  // To set the questions in store
  type: TYPES.SET_QUESTIONS,
  payload: data,
});

export const updateAnswer = (data) => ({
  // To update the selected answer in the store
  type: TYPES.UPDATE_ANSWER,
  payload: data,
});

export const setActiveIndex = (index) => ({
  // To set  the active index
  type: TYPES.SET_ACTIVE_INDEX,
  payload: index,
});

export const resetAnswers = () => ({
  //  To Reset the answers and diplay the first question
  type: TYPES.RESET_ANSWERS,
});
