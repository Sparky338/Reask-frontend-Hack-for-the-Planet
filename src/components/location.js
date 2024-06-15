import { useState } from "react";

const LocationSearch = () => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // await => backend call passing in location to update graphs
  };

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
            placeholder="Location"
          />
        </label>
        <button className="button location-search" onClick={handleSubmit}>
          MAGNIFYING GLASS
        </button>
      </form>
    </div>
  );
};

export default LocationSearch;