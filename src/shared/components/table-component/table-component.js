import { useState } from "react";

const TableComponent = (props) => {
  return (
    <div className="container py-5">
      <button className="btn btn-primary align-self-end">Add</button>
      <table className="table text-center table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>max</td>
            <td>well</td>
            <td>male</td>
            <td>
              <div className="flex-inline">
                <button className="btn btn-success">Edit</button>
                <button className="btn btn-success">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
