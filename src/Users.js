// CustomersPage.js
import React from "react";
import BoxList from "./BoxList";
import "./Users.css"

function UsersPage() {
  const userData = [
    ["1", "John", "Doe", "5"],
    ["2", "Jane", "Smith", "3"],
    ["3", "Alice", "Johnson", "7"],
  ];

  return (
    <>
        <h1 className="header">
            Users 
        </h1>
        <BoxList
            headers={["Customer ID", "First Name", "Last Name", "DVDs Rented"]}
            rows={userData}
        />
    </>
  );
}

export default UsersPage;
