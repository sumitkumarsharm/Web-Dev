import React, { useContext } from "react";
import { DataContext } from "../Context/DataContext";

const UserList = () => {
  const { users } = useContext(DataContext);

  return (
    <div className="grid gap-4">
      {users.length === 0 ? (
        <p>No users added yet.</p>
      ) : (
        users.map((user) => (
          <div
            key={user.id}
            className="border p-4 rounded shadow bg-gray-100 w-80"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Password:</strong> {user.password}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;
