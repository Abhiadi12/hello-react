import axios from "axios";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
};

export const correctGuess = () => {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
};

export const getSecreatWord = () => {
  // return response from server
  //TODO: write actutal action using redux and context
  return axios
    .get("http://localhost:3000/secreatWord")
    .then((response) => response.data);
};
