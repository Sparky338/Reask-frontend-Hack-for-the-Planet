import DateSelector from "./dateSelector";
import LocationSearch from "./location";

import "../css/homepage.css"

const Homepage = () => {
  return (
    <div className="main-div">
      <div className="top-options">
        <LocationSearch />
        <DateSelector />
      </div>
      {/* insert components here */}
    </div>
  );
};

export default Homepage;
