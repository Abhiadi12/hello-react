import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Input({ secretWord }) {
  const [currentGuess, setCurrentGuess] = React.useState("");
  const flag = useSelector((state) => state.success);

  return (
    <div data-test="input-component">
      {flag || (
        <form>
          <input
            data-test="input-box"
            type="text"
            placeholder="guess the word"
            value={currentGuess}
            onChange={(event) => setCurrentGuess(event.target.value)}
          />
          <button
            data-test="submit-btn"
            onClick={(event) => {
              event.preventDefault();
              setCurrentGuess("");
            }}
          >
            submit
          </button>
        </form>
      )}
    </div>
  );
}

Input.propTypes = {
  flag: PropTypes.bool,
  secretWord: PropTypes.string.isRequired,
};
export default Input;
