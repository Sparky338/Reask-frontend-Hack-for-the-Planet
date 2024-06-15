import DateSelector from "./dateSelector";
import LocationSearch from "./location";

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
