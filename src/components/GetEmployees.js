import React, { Component } from "react";
import employees from "./employees.js";

import ReactTable from "react-table";
import "react-table/react-table.css";

import matchSorter from "match-sorter";

const data = [
  {
    userId: "rirani",
    jobTitleName: "Developer",
    firstName: "Romin",
    lastName: "Irani",
    preferredFullName: "Romin Irani",
    employeeCode: "E1",
    region: "CA",
    phoneNumber: "408-1234567",
    emailaddress: "romin.k.irani@gmail.com"
  },
  {
    userId: "nirani",
    jobTitleName: "Developer",
    firstName: "Neil",
    lastName: "Irani",
    preferredFullName: "Neil Irani",
    employeeCode: "E2",
    region: "CA",
    phoneNumber: "408-1111111",
    emailaddress: "neilrirani@gmail.com"
  },
  {
    userId: "thanks",
    jobTitleName: "Program Directory",
    firstName: "Tom",
    lastName: "Hanks",
    preferredFullName: "Tom Hanks",
    employeeCode: "E3",
    region: "CA",
    phoneNumber: "408-2222222",
    emailaddress: "tomhanks@gmail.com"
  }
];

class GetEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: employees
    };
  }

  render() {
    const columns = [
      {
        Header: "User Id",
        accessor: "userId",
        filterable: false
      },
      {
        Header: "Job Title Name",
        accessor: "jobTitleName",
        filterable: false
      },
      {
        Header: "First Name",
        accessor: "firstName",
        filterable: false
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        filterable: false
      },
      {
        Header: "Preferred FullName",
        accessor: "preferredFullName",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["preferredFullName"] }),
        filterAll: true
      },
      {
        Header: "Employee Code",
        accessor: "employeeCode",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["employeeCode"] }),
        filterAll: true
      },
      {
        Header: "Region",
        accessor: "region",
        filterable: false
      },
      {
        Header: "Phone Number",
        accessor: "phoneNumber",
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ["phoneNumber"] }),
        filterAll: true
      },
      {
        Header: "Email Address",
        accessor: "emailaddress",
        filterable: false
      }
    ];

    return (
      <div>
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value
          }
          columns={columns}
        />
      </div>
    );
  }
}

export default GetEmployees;
