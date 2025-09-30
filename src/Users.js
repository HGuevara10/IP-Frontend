import React, { useState, useEffect } from "react";
import BoxList from "./BoxList";
import "./Users.css";

function UsersPage() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 20;

  const fetchUsers = (pageNum) => {
    fetch(`http://127.0.0.1:5000/users?page=${pageNum}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        const rows = data.data.map((user) => [
          user.customer_id,
          user.first_name,
          user.last_name,
          user.count,
        ]);
        setUserData(rows);
        setPage(data.page);
        setTotalPages(Math.ceil(data.total / limit));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchUsers(page);
  }, []);

  const handlePrev = () => {
    if (page > 1) {
      fetchUsers(page - 1);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      fetchUsers(page + 1);
    }
  };

  return (
    <div className="big-div">
      <h1 className="header">Users</h1>
      <BoxList
        headers={["Customer ID", "First Name", "Last Name", "DVDs Rented"]}
        rows={userData}
      />
      <div className="pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>
        <span className="page-number">{page}</span>
        <button onClick={handleNext} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default UsersPage;