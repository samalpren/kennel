import React, { Component } from 'react'
import "./location.css"

export default class LocationList extends Component {
  render(){
    return (
      <div className="content">
        <h2>Locations</h2>
          <div className="locationWrapper">
          <section className="locationCard">
              {
                this.props.locations.map(location => 
                <div key={location.id}>
                  <h4>{location.name}</h4>
                  <p>{location.address}</p>
                </div>
                )
              }
              </section>
          </div>
      </div>
    );
  }
}

// import React, { Component } from 'react';

// export default class LocationList extends Component {
//   render(){
//     return (
//       <div className="locationWrapper content">
//       <section className="locationCard">
//       <h1>Location List</h1>
//           {
//             this.props.locations.map(location =>
//               <div key={location.id}>
//                 <h4>{location.name}</h4>
//                 <p>{location.address}</p>
//               </div>
//             )
//           }
//       </section>
//       </div>

//     );
//   }
// }