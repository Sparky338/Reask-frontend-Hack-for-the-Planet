import { useState, useEffect } from "react";

import "../css/probabilityEvents.css";

const ProbabilityEvents = () => {
  const [data, setData] = useState("");
  const [display, setDisplay] = useState("");

useEffect(() => {
    data === ""
      ? setDisplay(
          <h2 className="no-probability-events"> Upload a CSV to get started </h2>
        )
      : setDisplay(/* display probability & events graph component*/ );

}, [data])


  return (
    <div className="probability-events-main-div">
      <div className="probability-and-events">
        {display}
      </div>
    </div>
  );
};

export default ProbabilityEvents;
