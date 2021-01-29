import React, { useState, useEffect } from "react";
import './App.css';

import Profiles from "./components/Profiles";
import Footer from "./components/Footer";
import { USER_PER_PAGE } from "../src/utils/constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
 

const App = () => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [query, setQuery] = useState("");
  const [searchColumns, setSearchColumns] = useState(["FirstName", "LastName"]);
  
  const search = (index) => {
    const filters = index.filter((res) => 
      searchColumns.some((user) => res[user].toString().toLowerCase().indexOf(query.toLowerCase()) > -1)
    );
    return filters;
  };

  // To select how many persons you can view per page
  const startIndex = (page - 1) * USER_PER_PAGE;

  // To filter with search bar. This working very well.
  const selectedProfiles = search(items).slice(startIndex, startIndex + USER_PER_PAGE);


  useEffect(() => {
    fetch("https://api.enye.tech/v1/challenge/records")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.records.profiles);

          setTotalPages(Math.ceil(result.records.profiles.length / USER_PER_PAGE));
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const handleClick = (num) => {
    setPage(num)
  }

  
  const users = items[0] && Object.keys(items[0]);
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="py-5 main">
        <div className="topnav">
          <div className="search-container">
            <input 
              type="search" 
              placeholder="Search.." 
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)} />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className="filter">
            <p>Filter your search:</p>
            {users && users.filter((el) => 
              el === "FirstName" || 
              el === "LastName" || 
              el === "Gender" || 
              el === "PaymentMethod" || 
              el === "CreditCardType")
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
            <Profiles profile={i} key={i.Email} />
          ))}
        </div>
        <Footer
          totalPages={totalPages}
          handleClick={handleClick}
          selectedProfiles={selectedProfiles}
          />
      </div>     
    );
  }
}

export default App;

// users && users.map((user) => <label>
//               <input type="checkbox" checked={searchColumns.includes(user)}
//               onChange={(e) => {
//                 const checked = searchColumns.includes(user)
//                 setSearchColumns(prev => checked 
//                   ? prev.filter(sc => sc !== user)
//                   : [...prev, user])
//               }} />
//               {user} &nbsp;
//             </label>)