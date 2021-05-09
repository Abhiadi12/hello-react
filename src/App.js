import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
//import FirstOne from './Components/FirstOne';
import Congrats from "./Congrats/Congrats";
import GuessWord from "./GuessWord/GuessWord";
import Input from "./InputComponent/Input";
import { Provider } from "react-redux";
import store from "./store";

import { getSecreatWord } from "./actions/index";

function App() {
  const [value, setValue] = React.useState(0);
  const flag = false;
  const secreatWord = "pretty";
  const guessWords = [
    { enterWord: "lion", totalCharacterMatches: 0 },
    { enterWord: "pop", totalCharacterMatches: 1 },
  ];

  useEffect(() => {
    getSecreatWord();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <h3 className="display-counter">
        {" "}
        Counter value is <span data-test="counter-value">{value}</span>
      </h3>
      <button
        data-test="increment-button"
        onClick={() => setValue((prevState) => prevState + 1)}
      >
        Plus
      </button>
      <button
        data-test="decreament-button"
        onClick={() =>
          setValue((prevState) => (prevState > 0 ? prevState - 1 : prevState))
        }
      >
        Minus
      </button>
      {value ? null : (
        <div className="message" style={{ textAlign: "center", color: "red" }}>
          Counter value can't less than 0
        </div>
      )}
      {/* ------------------------ Guess word game start ----------------------- */}
      <Provider store={store}>
        <div className="word-game-root" style={{ marginTop: "2em" }}>
          <Congrats flag={flag} />
          <Input secretWord={secreatWord} />
          <GuessWord guessWords={guessWords} />
        </div>
      </Provider>
    </div>
  );
}

export default App;
