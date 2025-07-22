import React from "react";

const Students = ({ student }) => {
  console.log(student);

  return (
    <ol className="ml-12">
      <li  className=" underline">{student.name}</li>
    </ol>
  );
};

export default Students;
