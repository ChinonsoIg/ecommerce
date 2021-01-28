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
          <span>Payment method: {profile.PaymentMethod}</span>
        </p>
        <p>For more info, visit  
          <i> {profile.URL}</i>
        </p>
      </div>
    </div>
  );
}

export default Profiles;


// class MyComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       error: null,
//       isLoaded: false,
//       items: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://api.enye.tech/v1/challenge/records")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           this.setState({
//             isLoaded: true,
//             items: result.records
//           });
//         },
//         (error) => {
//           this.setState({
//             isLoaded: true,
//             error
//           });
//         }
//       )
//   }

//   render() {
//     const { error, isLoaded, items } = this.state;
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {
//       return (
//         <section id="s3_regions" className="py-5">
//           <div className="regions-grid mx-2">
//             {items.profiles.map(item => (
//               <div className="card mx-2 regions-subgrid" key={item.Email}>
//                 <div className="card-body">
//                   <h5 className="text-warning text-center card-title mt-2">
//                     {`${item.FirstName} ${item.LastName}, `}
//                     <span className="card-text"><i>{item.Gender}</i></span>
//                   </h5>
//                   <p>Username: {item.UserName}</p>
//                   <p><span>{item.Email} </span>
//                   <span>{item.PhoneNumber}</span>
//                   </p>
//                   <p><span>{item.MacAddress} </span>
//                   <span>{item.DomainName}</span>
//                   </p>
//                   <p>
//                     <span>{item.CreditCardType} </span>
//                     <span>{item.CreditCardNumber}</span>
//                   </p>
//                   <p>
//                     <span>{item.LastLogin} </span>
//                     <span>{item.Latitude}</span>
//                     <span>{item.Longitude}</span>
//                   </p>
//                   <p>
//                     <span>{item.PaymentMethod} </span>
//                     <span>{item.URL}</span>
//                   </p>
//                 </div>
//               </div>
//             ))}            
//           </div>
//         </section>
        
//       );
//     }
//   }
// }

// export default MyComponent;