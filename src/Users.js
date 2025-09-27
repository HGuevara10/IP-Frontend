import React, {useState, useEffect} from "react";
import BoxList from "./BoxList";
import "./Users.css"

function UsersPage() {
  
  const[userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
    .then((res) => res.json())
    .then((data) => {
      const rows = data.map(user => [
        user.customer_id,
        user.first_name,
        user.last_name,
        user.count
      ]);
      setUserData(rows)
    })
    .catch((err) => console.log(err))
  });

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
