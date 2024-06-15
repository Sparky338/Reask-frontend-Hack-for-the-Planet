import { useState } from "react";
import "../css/location.css"

const LocationSearch = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // await => backend call passing in location to update graphs
  };

  const magnifyingGlass = <i class="fa-solid fa-magnifying-glass"></i>;

  return (
    <div className="main-location-div">
      {/* search bar */}
      <form
        className="location-search-form"
        onSubmit={handleSubmit /*finalize this, backend call */}
      >
        <label>
          <input
            className="location-search-bar"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="  Search for Location"
          />
        </label>
        <button className="button location-search-button" onClick={handleSubmit}>
          {magnifyingGlass}
        </button>
      </form>
    </div>
  );
};

export default LocationSearch;
