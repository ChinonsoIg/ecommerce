import React, { useState, useEffect } from "react";


const Footer = ({ totalPages, handleClick, selectedProfiles }) => {

  const pages = [...Array(totalPages).keys()].map(num => num + 1);
  // console.log('Pages: ',selectedProfiles);

  return (
    <div className="footer">    
      <div className="pagination">
        {
          pages.map(num => (
            <button
              key={num}
              onClick={() => handleClick(num)}
              >{num}
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default Footer;
