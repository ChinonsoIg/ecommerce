import React from "react";
import "../App.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


const Profiles = ({ profile }) => {
  return (
    <div className="card mx-2 regions-subgrid effect">
      <div className="card-body">
        <h5 className="text-center card-title mt-2">
          {`${profile.FirstName} ${profile.LastName}, `}
          <span><i>{profile.Gender}</i></span>
        </h5>
        <p className="text-center">
          Username: <span className="faint-coloured">{profile.UserName}</span>
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;
          <i>{profile.Email}</i> &nbsp; &nbsp;
          <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
          <i>{profile.PhoneNumber}</i>
        </p>
        <p>
          MacAddress: <span className="bg">{profile.MacAddress}</span>, &nbsp;
          <span>Domain name: &nbsp;{profile.DomainName}</span>
        </p>
        <p>
          Credit card type: <span className="koloured">{profile.CreditCardType}, </span>
          Credit card number: <span className="bg">{profile.CreditCardNumber}</span>
        </p>
        <p>
          Last login: <span className="koloured">{profile.LastLogin}, </span>
          Lat: <span  className="bg">{profile.Latitude} </span>,
          Lon: <span className="bg">{profile.Longitude}</span>
        </p>
        <p>
          Payment method: <span className="koloured">{profile.PaymentMethod} </span>
        </p>
        <p>For more info, visit  
          <i className="koloured"> {profile.URL}</i>
        </p>
      </div>
    </div>
  );
}

export default Profiles;

