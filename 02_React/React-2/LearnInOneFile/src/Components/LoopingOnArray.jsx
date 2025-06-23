import React from "react";

const LoopingOnArray = () => {
  const StudentData = [
    {
      id: 1,
      name: "Aarav Sharma",
      age: 20,
      gender: "Male",
      college: "Delhi University",
      department: "Computer Science",
      year: "2nd",
      email: "aarav.sharma@du.ac.in",
    },
    {
      id: 2,
      name: "Ishita Verma",
      age: 19,
      gender: "Female",
      college: "Delhi University",
      department: "English Literature",
      year: "1st",
      email: "ishita.verma@du.ac.in",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      age: 21,
      gender: "Male",
      college: "IIT Bombay",
      department: "Mechanical Engineering",
      year: "3rd",
      email: "rahul.mehta@iitb.ac.in",
    },
    {
      id: 4,
      name: "Sneha Kapoor",
      age: 22,
      gender: "Female",
      college: "IIT Bombay",
      department: "Chemical Engineering",
      year: "4th",
      email: "sneha.kapoor@iitb.ac.in",
    },
    {
      id: 5,
      name: "Karan Patel",
      age: 20,
      gender: "Male",
      college: "BITS Pilani",
      department: "Electrical Engineering",
      year: "2nd",
      email: "karan.patel@bitspilani.ac.in",
    },
    {
      id: 6,
      name: "Pooja Nair",
      age: 19,
      gender: "Female",
      college: "BITS Pilani",
      department: "Physics",
      year: "1st",
      email: "pooja.nair@bitspilani.ac.in",
    },
    {
      id: 7,
      name: "Arjun Desai",
      age: 21,
      gender: "Male",
      college: "Anna University",
      department: "Civil Engineering",
      year: "3rd",
      email: "arjun.desai@annauniv.edu",
    },
    {
      id: 8,
      name: "Megha Singh",
      age: 22,
      gender: "Female",
      college: "Anna University",
      department: "Architecture",
      year: "4th",
      email: "megha.singh@annauniv.edu",
    },
    {
      id: 9,
      name: "Vikram Joshi",
      age: 20,
      gender: "Male",
      college: "NIT Trichy",
      department: "Computer Science",
      year: "2nd",
      email: "vikram.joshi@nitt.edu",
    },
    {
      id: 10,
      name: "Neha Gupta",
      age: 19,
      gender: "Female",
      college: "NIT Trichy",
      department: "Mathematics",
      year: "1st",
      email: "neha.gupta@nitt.edu",
    },
    {
      id: 11,
      name: "Ankit Reddy",
      age: 21,
      gender: "Male",
      college: "VIT Vellore",
      department: "Information Technology",
      year: "3rd",
      email: "ankit.reddy@vit.ac.in",
    },
    {
      id: 12,
      name: "Riya Das",
      age: 22,
      gender: "Female",
      college: "VIT Vellore",
      department: "Biotechnology",
      year: "4th",
      email: "riya.das@vit.ac.in",
    },
    {
      id: 13,
      name: "Siddharth Jain",
      age: 20,
      gender: "Male",
      college: "Amity University",
      department: "Business Administration",
      year: "2nd",
      email: "siddharth.jain@amity.edu",
    },
    {
      id: 14,
      name: "Tanya Roy",
      age: 19,
      gender: "Female",
      college: "Amity University",
      department: "Media Studies",
      year: "1st",
      email: "tanya.roy@amity.edu",
    },
    {
      id: 15,
      name: "Harsh Vardhan",
      age: 21,
      gender: "Male",
      college: "SRM University",
      department: "Automobile Engineering",
      year: "3rd",
      email: "harsh.vardhan@srmist.edu.in",
    },
    {
      id: 16,
      name: "Shruti Menon",
      age: 22,
      gender: "Female",
      college: "SRM University",
      department: "Pharmacy",
      year: "4th",
      email: "shruti.menon@srmist.edu.in",
    },
    {
      id: 17,
      name: "Manav Bhatia",
      age: 20,
      gender: "Male",
      college: "JNU",
      department: "Political Science",
      year: "2nd",
      email: "manav.bhatia@jnu.ac.in",
    },
    {
      id: 18,
      name: "Ayesha Khan",
      age: 19,
      gender: "Female",
      college: "JNU",
      department: "Sociology",
      year: "1st",
      email: "ayesha.khan@jnu.ac.in",
    },
    {
      id: 19,
      name: "Nikhil Sinha",
      age: 21,
      gender: "Male",
      college: "IGNOU",
      department: "History",
      year: "3rd",
      email: "nikhil.sinha@ignou.ac.in",
    },
    {
      id: 20,
      name: "Divya Iyer",
      age: 22,
      gender: "Female",
      college: "IGNOU",
      department: "Psychology",
      year: "4th",
      email: "divya.iyer@ignou.ac.in",
    },
  ];

  return (
    <div>
      <h1 className="ml-3  mt-3 text-5xl font-bold italic">
        Looping in JSX with Map Method
      </h1>
      <br />
      <h1 className="text-4xl font-extrabold mb-4">Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <td className="border-2 text-center border-black p-2">Id</td>
            <td className="border-2 text-center border-black p-2">Name</td>
            <td className="border-2 text-center border-black p-2">Age</td>
            <td className="border-2 text-center border-black p-2">Gender</td>
            <td className="border-2 text-center border-black p-2">College</td>
            <td className="border-2 text-center border-black p-2">
              Department
            </td>
            <td className="border-2 text-center border-black p-2">Year</td>
            <td className="border-2 text-center border-black p-2">Email</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-2 text-center border-black p-2">1</td>
            <td className="border-2 text-center border-black p-2">Sumit</td>
            <td className="border-2 text-center border-black p-2">22</td>
            <td className="border-2 text-center border-black p-2">Male</td>
            <td className="border-2 text-center border-black p-2">TIT</td>
            <td className="border-2 text-center border-black p-2">EE</td>
            <td className="border-2 text-center border-black p-2">2023</td>
            <td className="border-2 text-center border-black p-2">
              sumit@test.com
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <hr />
      <br />
      <h1 className="text-4xl font-extrabold m-4">Real Data</h1>
      <table className="m-4">
        <thead>
          <tr>
            <td className="border-2 font-bold text-center border-black p-2">
              Id
            </td>
            <td className="border-2 font-bold text-center border-black p-2">
              Name
            </td>
            <td className="border-2 font-bold text-center border-black p-2">
              Age
            </td>
            <td className="border-2 font-bold text-center border-black p-2">
              Gender
            </td>
            <td className="border-2 font-bold text-center border-black p-2">
              College
            </td>
            <td className="border-2 font-bold text-center border-black p-2">
              Department
            </td>
            <td className="border-2 text-center font-bold border-black p-2">
              Year
            </td>
            <td className="border-2 text-center font-bold border-black p-2">
              Email
            </td>
          </tr>
        </thead>
        <tbody>
          {StudentData.map((student) => (
            <tr key={student.id}>
              <td className="border-2 text-center border-black p-2">
                {student.id}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.name}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.age}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.gender}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.college}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.department}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.year}
              </td>
              <td className="border-2 text-center border-black p-2">
                {student.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LoopingOnArray;
