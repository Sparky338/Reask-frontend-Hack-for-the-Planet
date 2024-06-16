import "../css/variables.css"

const Variables = () => {
  return (
    <div className="variables-main-div">
      <h2 className="title-variables">Variables</h2>
      <form
        className="variables-form"
        // onSubmit={handleSubmit /*finalize this, backend call */}
      >
        <label className="variables-label">
          Warming Scenarios
          <select
            className="variables-selectors"
            name="variables"
            id="variables-selectors"
          >
            <option value="">Degrees C</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <label className="variables-label">
          Risk Exposure
          <select
            className="variables-selectors"
            name="variables"
            id="variables-selectors"
          >
            <option value="">All</option>
            <option value="hurricane">Hurricane</option>
            <option value="fire">Fire</option>
          </select>
        </label>
        <label className="variables-label">
          Mitigation
          <select
            className="variables-selectors"
            name="variables"
            id="variables-selectors"
          >
            <option value="no">None</option>
          </select>
        </label>
        <button
          className="button location-search-button"
          //   onClick={handleSubmit}
        >
        </button>
      </form>
    </div>
  );
};

export default Variables;
