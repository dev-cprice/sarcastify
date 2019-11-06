import React from "react";
import classNames from "classnames/bind";
import styles from "./CopyButton.css";

const cx = classNames.bind(styles);

function CopyButton({ nodeRef, isDisabled, onCopy }) {
  const [showStatus, setShowStatus] = React.useState(false);

  const handleCopy = React.useCallback(() => {
    const { current: node } = nodeRef;

    document.getSelection().selectAllChildren(node);
    document.execCommand("copy");

    setShowStatus(true);

    if (onCopy) {
      onCopy();
    }
  }, [nodeRef, onCopy]);

  React.useEffect(() => {
    const timeout = setTimeout(() => setShowStatus(false), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showStatus]);

  return (
    <div>
      <button
        className={cx({ "btn-disabled": isDisabled })}
        disabled={isDisabled}
        type="button"
        onClick={handleCopy}
      >
        COPY RESULT
      </button>
      {showStatus && (
        <p className="copy-button-status">Result copied to clipboard!</p>
      )}
    </div>
  );
}

export default CopyButton;
