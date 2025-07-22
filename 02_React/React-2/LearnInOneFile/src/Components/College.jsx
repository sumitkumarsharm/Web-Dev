import React from "react";
import Students from "./Students";

const College = ({ college }) => {
//   console.log(college);

  return (
    <div>
      <div className="bg-gray-700 text-white p-3  rounded-sm">
        <h1 className="text-2xl italic">
          <b className="text-3xl italic">Collage Name : </b>
          {college.collegeName}
        </h1>
        <h1 className="text-2xl italic">
          <b className="text-3xl italic">City : </b>
          {college.city}
        </h1>
        <h1 className="text-2xl italic">
          <b className="text-3xl italic">Email : </b>
          {college.email}
        </h1>
        <h2 className="text-2xl italic mt-4 ">All Students..</h2>
        {college.students.map((student) => (
          <Students key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default College;
