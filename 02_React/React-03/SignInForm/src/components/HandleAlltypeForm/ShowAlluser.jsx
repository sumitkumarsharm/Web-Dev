import React from "react";

function ShowAlluser({ users }) {
  console.log(users);

  if (users.length === 0) {
    return <p className="text-gray-500">No users yet.</p>;
  }

  return (
    <div className="space-y-2 ">
      {users.map((user, index) => (
        <div
          key={index}
          className="border-black p-2 rounded bg-neutral-500 flex text-center justify-between"
        >
          <strong>User : {index + 1}</strong>
          <div>
            <strong>Name : {user.Name},</strong>&nbsp;
            <strong>Password : {user.password}, </strong>&nbsp;
            <strong>Age : {user.Age}, </strong>&nbsp;
            <strong>Gender : {user.gender} </strong>&nbsp;
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShowAlluser;
