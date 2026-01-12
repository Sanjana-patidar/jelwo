import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const User = () => {
  const [users, setUsers] = useState([]);
  //fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="usertable">
      <h3 className="text-danger">User List</h3>
      <table className="table table-striped table-bordered">
        <thead className="table-danger">
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
