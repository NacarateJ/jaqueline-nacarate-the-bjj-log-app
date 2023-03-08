import "../Alerts/Alerts.scss";

import React, { useRef, useEffect, memo } from "react";


const Alerts = ({ message }) => {
   const alertEl = useRef();

   useEffect(() => {
     if (message) {
       alertEl.current.classList.add("show");
     } else {
       alertEl.current.classList.remove("show");
     }
   }, [message]);

   return (
     <div className={`alert`} ref={alertEl}>
       <h1>{message}</h1>
     </div>
   );
};

export default memo(Alerts);
// React.memo cause React to skip rendering the component if it's props have not changed 
// to improve performance
