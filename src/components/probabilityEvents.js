import { useState, useEffect } from "react";
import ep from "../notebook_output/2022/ep.png";
import summary from "../notebook_output/2022/summary_stats.png";

import "../css/probabilityEvents.css";

const ProbabilityEvents = () => {
  const [data, setData] = useState("");
  const [display, setDisplay] = useState("");

  //  THIS WOULD BE USED TO UPDATE WHEN A CSV WAS UPLOADED AND DISPLAY THE GRAPHS
  //   useEffect(() => {
  //     data === ""
  //       ? setDisplay(
  //           <h2 className="no-probability-events">
  //             {" "}
  //             Upload a CSV to get started{" "}
  //           </h2>
  //         )
  //       : setDisplay(
  //           <div className="excedence-and-summary-graph">
  //             <h2 className="Loss-excedence-probability-graph">
  //               Loss excedence probability graph
  //             </h2>
  //             <img
  //               src="../notebook_output/2022/ep.png"
  //               alt="Loss excedence probability graph"
  //               className="loss-excedence-graph"
  //             />
  //             <h2 className="Loss-excedence-probability-graph">
  //               Summary of stats
  //             </h2>
  //             <img
  //               src="html:// route to saved image"
  //               alt="Summary stats: Average annual loss, Value at risk"
  //               className="loss-excedence-graph"
  //             />
  //           </div>
  //         );
  //   }, [data]);

  return (
    <div className="probability-events-main-div">
      {/* NEXT LINE DEPENDANT ON UPLOADED CSV */}
      {/* <div className="probability-and-events">{display}</div> */}
      <div className="excedence-and-summary-graph">
        <div className="EP-Graph">
          <h2 className="Loss-excedence-probability-graph">
            Loss excedence probability graph
          </h2>
          <img
            src={ep}
            alt="Loss excedence probability graph"
            className="loss-excedence-graph"
          />
        </div>
        <div className="summary-Graph">
          <h2 className="Loss-excedence-probability-graph">Summary of stats</h2>
          <img
            src={summary}
            alt="Summary stats: Average annual loss, Value at risk"
            className="loss-excedence-graph"
          />
        </div>
      </div>
    </div>
  );
};

export default ProbabilityEvents;
