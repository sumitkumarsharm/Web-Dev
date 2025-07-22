import React, { useState } from "react";

const Chechbox = () => {
  const [skills, setSkills] = useState([]);
  const handleSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.id]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.id));
    }
  };
  return (
    <div className="text-3xl">
      <h1>Handle checkbox</h1>
      <h2>select your Skills</h2>
      <input onChange={handleSkills} type="checkbox" id="PHP" />
      <label htmlFor="PHP"> PHP</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="js" />
      <label htmlFor="js"> js</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="Java" />
      <label htmlFor="Java"> Java</label>
      <br />
      <input onChange={handleSkills} type="checkbox" id="python" />
      <label htmlFor="python"> python</label>
      <br />
      <br />
      <br />
      <h1>{skills.toString()}</h1>
    </div>
  );
};

export default Chechbox;
