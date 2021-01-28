import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar({ result }) {
  const [query, setQuery] = useState("");

  const search = (result) => {
    return result.filter(res => res.Gender.toLowerCase(query))
  }

  return (
    <div>
      <div className="topnav">
        <div className="search-container">
          <form action="#">
            <input 
              type="text" 
              placeholder="Search.." 
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>
        <div className="filter">
          <select>
            <option>Age</option>
            <option>Name</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Navbar;