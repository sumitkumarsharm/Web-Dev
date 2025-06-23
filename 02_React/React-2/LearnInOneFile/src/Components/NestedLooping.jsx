import React from "react";
import College from "./College";

const NestedLooping = () => {
  const CollageNameList = [
    {
      id: 1,
      collegeName: "Sunrise Institute of Technology",
      city: "Pune",
      email: "info@sunrisetech.edu.in",
      students: [
        {
          id: 1,
          name: "Aarav Sharma",
          age: 20,
          department: "Computer Science",
          email: "aarav01@sunrise.edu.in",
        },
        {
          id: 2,
          name: "Isha Mehta",
          age: 21,
          department: "Mechanical",
          email: "isha02@sunrise.edu.in",
        },
        {
          id: 3,
          name: "Kabir Rao",
          age: 19,
          department: "Electrical",
          email: "kabir03@sunrise.edu.in",
        },
        {
          id: 4,
          name: "Riya Kapoor",
          age: 22,
          department: "Civil",
          email: "riya04@sunrise.edu.in",
        },
        {
          id: 5,
          name: "Devansh Gupta",
          age: 20,
          department: "IT",
          email: "devansh05@sunrise.edu.in",
        },
        {
          id: 6,
          name: "Nisha Yadav",
          age: 21,
          department: "Biotech",
          email: "nisha06@sunrise.edu.in",
        },
        {
          id: 7,
          name: "Harsh Verma",
          age: 22,
          department: "Mechanical",
          email: "harsh07@sunrise.edu.in",
        },
        {
          id: 8,
          name: "Pooja Das",
          age: 19,
          department: "Computer Science",
          email: "pooja08@sunrise.edu.in",
        },
        {
          id: 9,
          name: "Rahul Sen",
          age: 20,
          department: "IT",
          email: "rahul09@sunrise.edu.in",
        },
        {
          id: 10,
          name: "Sneha Jain",
          age: 21,
          department: "Electrical",
          email: "sneha10@sunrise.edu.in",
        },
      ],
    },
    {
      id: 2,
      collegeName: "Greenfield College of Engineering",
      city: "Bangalore",
      email: "contact@greenfieldeng.ac.in",
      students: [
        {
          id: 1,
          name: "Aditya Nair",
          age: 20,
          department: "Computer Science",
          email: "aditya01@greenfield.edu.in",
        },
        {
          id: 2,
          name: "Meera Iyer",
          age: 21,
          department: "Electronics",
          email: "meera02@greenfield.edu.in",
        },
        {
          id: 3,
          name: "Kunal Mishra",
          age: 22,
          department: "IT",
          email: "kunal03@greenfield.edu.in",
        },
        {
          id: 4,
          name: "Tanya Gill",
          age: 20,
          department: "Mechanical",
          email: "tanya04@greenfield.edu.in",
        },
        {
          id: 5,
          name: "Aman Sethi",
          age: 19,
          department: "Civil",
          email: "aman05@greenfield.edu.in",
        },
        {
          id: 6,
          name: "Rachna Singh",
          age: 21,
          department: "Biotech",
          email: "rachna06@greenfield.edu.in",
        },
        {
          id: 7,
          name: "Sahil Jain",
          age: 22,
          department: "Electrical",
          email: "sahil07@greenfield.edu.in",
        },
        {
          id: 8,
          name: "Neha Bhatt",
          age: 20,
          department: "IT",
          email: "neha08@greenfield.edu.in",
        },
        {
          id: 9,
          name: "Vivek Chawla",
          age: 21,
          department: "Computer Science",
          email: "vivek09@greenfield.edu.in",
        },
        {
          id: 10,
          name: "Divya Rani",
          age: 20,
          department: "Mechanical",
          email: "divya10@greenfield.edu.in",
        },
      ],
    },
    {
      id: 3,
      collegeName: "Blue Sky Polytechnic",
      city: "Delhi",
      email: "admin@blueskypoly.edu.in",
      students: [
        {
          id: 1,
          name: "Rohan Bhatia",
          age: 20,
          department: "Civil",
          email: "rohan01@bluesky.edu.in",
        },
        {
          id: 2,
          name: "Simran Kaur",
          age: 21,
          department: "Electrical",
          email: "simran02@bluesky.edu.in",
        },
        {
          id: 3,
          name: "Yash Joshi",
          age: 22,
          department: "Mechanical",
          email: "yash03@bluesky.edu.in",
        },
        {
          id: 4,
          name: "Priya Sharma",
          age: 20,
          department: "IT",
          email: "priya04@bluesky.edu.in",
        },
        {
          id: 5,
          name: "Manish Patel",
          age: 19,
          department: "Biotech",
          email: "manish05@bluesky.edu.in",
        },
        {
          id: 6,
          name: "Anjali Rawat",
          age: 21,
          department: "Computer Science",
          email: "anjali06@bluesky.edu.in",
        },
        {
          id: 7,
          name: "Suresh Reddy",
          age: 22,
          department: "Mechanical",
          email: "suresh07@bluesky.edu.in",
        },
        {
          id: 8,
          name: "Bhavna Singh",
          age: 19,
          department: "Civil",
          email: "bhavna08@bluesky.edu.in",
        },
        {
          id: 9,
          name: "Nitin Saxena",
          age: 20,
          department: "IT",
          email: "nitin09@bluesky.edu.in",
        },
        {
          id: 10,
          name: "Kritika Yadav",
          age: 21,
          department: "Electrical",
          email: "kritika10@bluesky.edu.in",
        },
      ],
    },
    {
      id: 4,
      collegeName: "Riverdale Engineering College",
      city: "Chennai",
      email: "hello@riverdaleec.ac.in",
      students: [
        {
          id: 1,
          name: "Vikram Rao",
          age: 20,
          department: "Computer Science",
          email: "vikram01@riverdale.edu.in",
        },
        {
          id: 2,
          name: "Ankita Roy",
          age: 21,
          department: "Mechanical",
          email: "ankita02@riverdale.edu.in",
        },
        {
          id: 3,
          name: "Rajeev Menon",
          age: 22,
          department: "Electrical",
          email: "rajeev03@riverdale.edu.in",
        },
        {
          id: 4,
          name: "Sana Khan",
          age: 20,
          department: "Civil",
          email: "sana04@riverdale.edu.in",
        },
        {
          id: 5,
          name: "Tushar Agarwal",
          age: 19,
          department: "IT",
          email: "tushar05@riverdale.edu.in",
        },
        {
          id: 6,
          name: "Lavanya D",
          age: 21,
          department: "Biotech",
          email: "lavanya06@riverdale.edu.in",
        },
        {
          id: 7,
          name: "Gaurav Pillai",
          age: 22,
          department: "Mechanical",
          email: "gaurav07@riverdale.edu.in",
        },
        {
          id: 8,
          name: "Shruti Nair",
          age: 19,
          department: "Computer Science",
          email: "shruti08@riverdale.edu.in",
        },
        {
          id: 9,
          name: "Arjun Prasad",
          age: 20,
          department: "IT",
          email: "arjun09@riverdale.edu.in",
        },
        {
          id: 10,
          name: "Nivedita Rao",
          age: 21,
          department: "Electrical",
          email: "nivedita10@riverdale.edu.in",
        },
      ],
    },
    {
      id: 5,
      collegeName: "Bright Future College",
      city: "Jaipur",
      email: "info@brightfuture.edu.in",
      students: [
        {
          id: 1,
          name: "Om Patel",
          age: 20,
          department: "Computer Science",
          email: "om01@brightfuture.edu.in",
        },
        {
          id: 2,
          name: "Pallavi Joshi",
          age: 21,
          department: "Mechanical",
          email: "pallavi02@brightfuture.edu.in",
        },
        {
          id: 3,
          name: "Deepak Bansal",
          age: 22,
          department: "Electrical",
          email: "deepak03@brightfuture.edu.in",
        },
        {
          id: 4,
          name: "Kavya Jain",
          age: 20,
          department: "Civil",
          email: "kavya04@brightfuture.edu.in",
        },
        {
          id: 5,
          name: "Ankit Rana",
          age: 19,
          department: "IT",
          email: "ankit05@brightfuture.edu.in",
        },
        {
          id: 6,
          name: "Snehal Dubey",
          age: 21,
          department: "Biotech",
          email: "snehal06@brightfuture.edu.in",
        },
        {
          id: 7,
          name: "Mohit Khurana",
          age: 22,
          department: "Mechanical",
          email: "mohit07@brightfuture.edu.in",
        },
        {
          id: 8,
          name: "Vidhi Shah",
          age: 19,
          department: "Computer Science",
          email: "vidhi08@brightfuture.edu.in",
        },
        {
          id: 9,
          name: "Yuvraj Singh",
          age: 20,
          department: "IT",
          email: "yuvraj09@brightfuture.edu.in",
        },
        {
          id: 10,
          name: "Tanvi Rawal",
          age: 21,
          department: "Electrical",
          email: "tanvi10@brightfuture.edu.in",
        },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-2 mb-4">
        Nested Looping in React
      </h1>
      <div className="flex justify-center flex-col m-6 gap-4 ">
        {CollageNameList.map((college) => {
          return <College key={college.id} college={college} />;
        })}
      </div>
    </div>
  );
};

export default NestedLooping;
