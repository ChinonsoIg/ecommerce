import React from "react";
import "../App.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


const Profiles = ({ profile }) => {

  // Time formatting
  function formatTime(unix_timestamp) {
    let index = new Date(unix_timestamp * 1000);
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fr', 'Sat'];
    let dayNum = index.getDay();    

    let hours = index.getHours();
    let minutes = "0" + index.getMinutes();
    let seconds = "0" + index.getSeconds();
    let weekDay = days[dayNum];
    let date = index.getDate();
    let month = months[index.getMonth()];
    let year = index.getFullYear();

    let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}, ${weekDay} ${date} ${month},${year}`;

    return formattedTime;
  }
  
  return (
    <div className="card mx-2 regions-subgrid effect">
      <div className="card-body">
        <h5 className="text-center card-title mt-2">
          {`${profile.first_name} ${profile.last_name}, `}
          <span><i>{profile.gender}</i></span>
        </h5>
        <p className="text-center mt-2">
          Username: <span className="faint-coloured"><i>{profile.user_name}</i></span>
        </p>
        <p className="mt-2">
          <FontAwesomeIcon icon={faEnvelope} />&nbsp;
          <i>{profile.email}</i> &nbsp; &nbsp;
          <FontAwesomeIcon icon={faPhoneVolume} />&nbsp;
          <i>{profile.phone_number}</i>
        </p>
        <p className="mt-2">
          MacAddress: <span className="bg">{profile.mac_address}</span>, &nbsp;
          Domain name: &nbsp;<span className="koloured">{profile.domain_name}</span>
        </p>
        <p className="mt-2">
          Credit card type: <span className="koloured">{profile.credit_card_type}, </span>
          Credit card number: <span className="bg">{profile.credit_card_number}</span>
        </p>
        <p className="mt-2">
          Last login: <span className="koloured">{formatTime(profile.last_login)}, </span>
          Lat: <span  className="bg">{profile.latitude} </span>,
          Lon: <span className="bg">{profile.longitude}</span>
        </p>
        <p className="mt-2">
          Payment method: <span className="koloured">{profile.payment_method} </span>
        </p>
        <p className="mt-2">For more info, visit  
          <i className="koloured"> {profile.url}</i>
        </p>
      </div>
    </div>
  );
}

export default Profiles;

