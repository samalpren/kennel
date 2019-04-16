import React, { Component } from 'react'
// import "./Employee.css"


export default class EmployeeList extends Component {
  render() {
    return (
      <section className="employees content">
      {
        this.props.employees.map(employee =>
          <div key={employee.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
                {employee.name}
                <button
                  onClick={() => this.props.deleteEmployee(employee.id)}
                  className="card-link">Delete</button>
              </h5>
            </div>
          </div>
        )
      }
      </section>
    )
  }
}

// import React, { Component } from 'react';

// export default class EmployeeList extends Component {
//   render() {
//     return (
//       <article className="content">
//         <h1>Employee List</h1>
//         <section>Jessica Younker</section>
//         <section>Jordan Nelson</section>
//         <section>Zoe LeBlanc</section>
//         <section>Blaise Roberts</section>
//       </article>
//     );
//   }
// }