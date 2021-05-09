import React from "react";
import PropTypes from "prop-types";
// This function receive an array of objects from parent and then render a table
function GuessWord({ guessWords }) {
  const tableRenderer = () => {
    return (
      <table data-test="guess-words">
        <thead>
          <tr>
            <th>Your Word</th>
            <th>Number of matches</th>
          </tr>
        </thead>
        <tbody>
          {guessWords.map((record, index) => (
            <tr key={index} data-test="guess-word">
              <th>{record.enterWord}</th>
              <th>{record.totalCharacterMatches}</th>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  return (
    <div data-test="component-guessword">
      GuessWord Details
      {guessWords.length === 0 ? (
        <p data-test="guess-instruction"> Please guess a word</p>
      ) : (
        tableRenderer()
      )}
    </div>
  );
}
GuessWord.propTypes = {
  guessWords: PropTypes.array,
};

export default GuessWord;
