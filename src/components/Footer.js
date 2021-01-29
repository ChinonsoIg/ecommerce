import React from "react";


const Footer = ({ totalPages, handleClick, selectedProfiles }) => {

  const pages = [...Array(totalPages).keys()].map(num => num + 1);

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
