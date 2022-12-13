import "../Alerts/Alerts.scss";

import React, { useRef, useEffect } from "react";


function Alerts(props) {
  const { message, type, setMessage } = props;
  const alertEl = useRef();

  useEffect(() => {
    if (message) {
      alertEl.current.style.width = "300px";
    } else {
      alertEl.current.style.width = "0px";
    }
  }, [message]);

  return (
    <div className="alert" ref={alertEl} type={type}>
      <h1>{message}</h1>
      {message && (
        <p
          onClick={() => {
            setMessage(undefined);
          }}
        >
          &times;
        </p>
      )}
    </div>
  );
}

export default Alerts;
