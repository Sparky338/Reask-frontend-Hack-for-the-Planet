import { useState } from "react";

const DateSelector = () => {
  return (
    <div className="main-date-selector-div">
        <select name="dates">
          <option value="">YEAR</option>
          <option value="1985">1985</option>
          <option value="1995">1995</option>
          <option value="2022">2022</option>
        </select>
    </div>
  );
};

export default DateSelector;
