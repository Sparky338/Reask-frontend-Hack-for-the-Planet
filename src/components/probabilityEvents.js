import { useState, useEffect } from "react";

import "../css/probabilityEvents.css";

const ProbabilityEvents = () => {
  const [data, setData] = useState("");
  const [display, setDisplay] = useState("");

  useEffect(() => {
    data === ""
      ? setDisplay(
          <h2 className="no-probability-events">
            {" "}
            Upload a CSV to get started{" "}
          </h2>
        )
      : setDisplay(
          <div className="excedence-and-summary-graph">
            <h2 className="Loss-excedence-probability-graph">
              Loss excedence probability graph
            </h2>
            <img
              src="html:// route to saved image"
              alt="Loss excedence probability graph"
              className="loss-excedence-graph"
            />
            <h2 className="Loss-excedence-probability-graph">
              Summary of stats
            </h2>
            <img
              src="html:// route to saved image"
              alt="Summary stats: Average annual loss, Value at risk"
              className="loss-excedence-graph"
            />
          </div>
        );
  }, [data]);

  return (
    <div className="probability-events-main-div">
      <div className="probability-and-events">{display}</div>
    </div>
  );
};

export default ProbabilityEvents;
