import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import "./Kennel.css"


export default class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

// import React, { Component } from "react"
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"

// import "./Kennel.css"
// import "bootstrap/dist/css/bootstrap.min.css"


// export default class Kennel extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <NavBar />
//                 <ApplicationViews />
//             </React.Fragment>
//         )
//     }
// }
//   export default ApplicationViews
  // render() {
  //   return (
  //     <div>
  //       <h3>Student Kennels</h3>
  //       <LocationList />
  //       <EmployeeList />
  //     </div>
  //   );
  // }