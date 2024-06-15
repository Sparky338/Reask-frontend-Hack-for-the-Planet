import DateSelector from "./dateSelector";
import LocationSearch from "./location";

import "../css/homepage.css"
import UploadCSV from "./uploadCSV";

const Homepage = () => {
  return (
    <div className="main-div">
      <div className="top-options">
        <LocationSearch />
        <DateSelector />
        <UploadCSV />
      </div>
      {/* insert components here */}
    </div>
  );
};

export default Homepage;
