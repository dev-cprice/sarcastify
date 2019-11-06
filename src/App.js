import React from "react";
import sarcastify from "./sarcastify";
import CopyButton from "./CopyButton";
import "./App.css";

function App() {
  const [sarcasticText, setSarcasticText] = React.useState("");
  const sarcasticRef = React.useRef(null);

  const onChange = React.useCallback(event => {
    setSarcasticText(sarcastify(event.target.value));
  }, []);

  const isButtonDisabled = !sarcasticText.length;

  return (
    <div className="App">
      <header className="App-header">
        <h1>SaRcAsTiFy</h1>
        <label htmlFor="sarcastic-input">Place your text here:</label>
        <textarea
          id="sarcastic-input"
          onChange={onChange}
          placeholder="PlAcE yOuR tExT hErE"
        />
        <CopyButton nodeRef={sarcasticRef} isDisabled={isButtonDisabled} />
        <h2>Result:</h2>
        <div ref={sarcasticRef}>
          {sarcasticText.split("\n").map((line, i) => (
            <div key={line + i}>{line}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
