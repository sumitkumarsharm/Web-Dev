import React from "react";

const Users = ({ student }) => {
  console.log(student);

  return (
    <div className="w-[450px] bg-gray-700 text-white p-3  rounded-sm">
      <h1 className="text-center text-2xl font-bold underline">User Cards</h1>
      <h2 className="text-xl font-extrabold mt-4 my-3">{student.name}</h2>
      <p className="text-white">
        <strong>Age:</strong> {student.age}
      </p>
      <p className="text-white">
        <strong>Gender:</strong> {student.gender}
      </p>
      <p className="text-white">
        <strong>College:</strong> {student.college}
      </p>
      <p className="text-white">
        <strong>Department:</strong> {student.department}
      </p>
      <p className="text-white">
        <strong>Year:</strong> {student.year}
      </p>
      <p className="text-white">
        <strong>Email:</strong> {student.email}
      </p>
      <br />
    </div>
  );
};

export default Users;
