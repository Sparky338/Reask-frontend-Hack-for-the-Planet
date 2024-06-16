import DateSelector from "./dateSelector";
import LocationSearch from "./location";

import "../css/homepage.css";
import UploadCSV from "./uploadCSV";
import Variables from "./variables";
import Graph from "./graph";
import ProbabilityEvents from "./probabilityEvents";

const Homepage = () => {
  return (
    <div className="main-div">
      <div className="top-options">
        <LocationSearch />
        <div className="right-buttons">
          <DateSelector />
          <UploadCSV />
        </div>
      </div>
      <div className="variables-chart-div">
        <Variables />
        <Graph />
      </div>
      <div className="probability-events">
        <ProbabilityEvents />
      </div>
    </div>
  );
};

export default Homepage;
