import React from "react";
import classNames from "classnames/bind";
import sarcastify from "./sarcastify";
import styles from "./App.css";

const cx = classNames.bind(styles);

function App() {
  const [value, setValue] = React.useState("");
  const sarcasticRef = React.useRef(null);

  const sarcasticText = React.useMemo(() => sarcastify(value), [value]);

  const onChange = React.useCallback(event => {
    setValue(event.target.value);
  }, []);

  const onCopy = React.useCallback(() => {
    const { current: sarcastic } = sarcasticRef;

    document.getSelection().selectAllChildren(sarcastic);
    document.execCommand("copy");
  }, []);

  const isButtonDisabled = !value.length;

  return (
    <div className="App">
      <header className="App-header">
        <h1>SaRcAsTiFy</h1>
        <label htmlFor="sarcastic-input">Place your text here:</label>
        <textarea
          id="sarcastic-input"
          onChange={onChange}
          value={value}
          placeholder="PlAcE yOuR tExT hErE"
          autoCorrect={false}
          autoComplete={false}
        />
        <button
          className={cx({ "btn-disabled": isButtonDisabled })}
          disabled={isButtonDisabled}
          type="button"
          onClick={onCopy}
        >
          COPY RESULT
        </button>
        <h2>Result:</h2>
        <div ref={sarcasticRef}>
          {sarcasticText.split("\n").map(line => (
            <div key={line}>{line}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
