import { PiMagnifyingGlassThin } from "react-icons/pi";
import PropTypes from "prop-types";

import "./Search.css";

function Search({ onSearchChange }) {
  function inputChange(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="search-container">
      <PiMagnifyingGlassThin className="search-icon" />
      <input
        onChange={inputChange}
        className="search"
        type="text"
        placeholder="Search for quotes"
      />
    </div>
  );
}

export default Search;

Search.propTypes = {
  onSearchChange: PropTypes.func,
};
