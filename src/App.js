import React, { useState } from "react";
import './App.css';
import MySavedSchema from "./My_Saved_Schema.json";

import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import { USER_PER_PAGE } from "../src/utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
 

const App = () => {
  
  // const [items, setItems] = useState(MySavedSchema);
  const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(Math.ceil(items.length / USER_PER_PAGE));
  const items = MySavedSchema;
  const totalPages = Math.ceil(items.length / USER_PER_PAGE)

  const [query, setQuery] = useState("");
  const [searchColumns, setSearchColumns] = useState(["first_name", "last_name"]);
  
  const search = (index) => {
    const filters = index.filter((res) => 
      searchColumns.some((user) => res[user].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    );
    return filters;
  };

  // To select how many persons displayed per page
  const startIndex = (page - 1) * USER_PER_PAGE;

  // To filter with search bar.
  const selectedProfiles = search(items).slice(startIndex, startIndex + USER_PER_PAGE);

  const handleClick = (num) => {
    setPage(num)
  }

  
  const users = items[0] && Object.keys(items[0]);
 
  return (
    <div className="py-5 main">
      <div className="topnav">
        <div className="search-container">
          <input 
            type="search" 
            placeholder="Search.." 
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
              />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="filter">
          <p>Filter your search:</p>
          {users && users.filter((el) => 
            el === "first_name" || 
            el === "last_name" || 
            el === "gender" || 
            el === "payment_method" || 
            el === "credit_card_type")
            .map((user) => 
              <label>
                <input type="checkbox" checked={searchColumns.includes(user)}
                onChange={(e) => {
                  const checked = searchColumns.includes(user)
                  setSearchColumns(prev => checked 
                    ? prev.filter(sc => sc !== user)
                    : [...prev, user])
                }} />
                {user} &nbsp;
              </label>
            )
          }
        </div>
      </div>
      <div className="regions-grid py-5">
        {selectedProfiles.map(i => (
          <Profiles profile={i} key={i.id} />
        ))}
      </div>
      <Footer
        totalPages={totalPages}
        handleClick={handleClick}
        selectedProfiles={selectedProfiles} />
    </div>
  );

}

export default App;

