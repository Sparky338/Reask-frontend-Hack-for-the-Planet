import { useState } from "react";

import "../css/probabilityEvents.css";

const ProbabilityEvents = () => {
  const [currentTab, setCurrentTab] = useState("");
  const [display, setDisplay] = useState("");

//   if (currentTab === "") {
//     setDisplay(
//       <h2 className="upload-CSV-placeholder">Upload a CSV to get started</h2>
//     );
//   } else {
//     currentTab === "probability"
//       ? setDisplay(/* display probability graph component*/ "prob")
//       : setDisplay(/* display events graph component*/ "events");
//   }

  return (
    <div className="probability-events-main-div">
      <div className="probability-or-events">{display}</div>
    </div>
  );
};

export default ProbabilityEvents;
