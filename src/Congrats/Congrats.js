import React from "react";
import PropTypes from "prop-types";

function Congrats({ flag }) {
  return (
    <div data-test="congrats-component">
      {flag ? (
        <div data-test="congrats-message">You are guess the word correct</div>
      ) : null}
    </div>
  );
}

Congrats.propTypes = {
  flag: PropTypes.bool,
};

export default Congrats;
