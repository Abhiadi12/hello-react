export const getLetterMatchCount = (secretWord, typedWord) => {
  // "abhisek" and "abhiraz"
  const helperObj = {};
  let count = 0;
  secretWord.split("").forEach((element) => {
    if (helperObj[element]) helperObj[element] += 1;
    else helperObj[element] = 1;
  });
  typedWord.split("").forEach((element) => {
    if (helperObj[element]) {
      count++;
      helperObj[element] -= 1;
    }
  });
  return count;
};
