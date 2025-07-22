import React, { useState } from "react";

const RadioDropDown = () => {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("Delhi");
  const handleRadiobtn = (event) => {
    setGender(event.target.value);
  };
  return (
    <div>
      <h1 className="text-5xl font-extrabold ">Handle Radio and DropDown</h1>
      <br />
      <div>
        <h3 className="text-3xl font-bold ml-3">Select Gender :</h3>
        <input
          className="ml-3 mt-2 cursor-pointer"
          type="radio"
          onChange={handleRadiobtn}
          id="male"
          checked={gender == "male" ? true : false}
          value={"male"}
          name="gender"
        />
        <label className="cursor-pointer" htmlFor="male">
          Male
        </label>
        <input
          className="ml-3 cursor-pointer"
          type="radio"
          onChange={handleRadiobtn}
          checked={gender == "female" ? true : false}
          id="female"
          value={"female"}
          name="gender"
        />
        <label className="cursor-pointer" htmlFor="female">
          Female
        </label>
        <br />
        <br />
        <h2 className="text-3xl font-bold">Selected Gender : {gender}</h2>
      </div>
      <br />
      <br />
      <h3 className="text-4xl font-bold">Drop and down</h3>
      <select
        className="border-2 ml-3 mt-3 p-1 text-2xl"
        onChange={(e) => setCity(e.target.value)}
        defaultValue={"bihar"}
      >
        <option className="cursor-pointer" value={"Delhi"}>Delhi</option>
        <option className="cursor-pointer" value={"Madhya Pradesh"}>Madhya Pradesh</option>
        <option className="cursor-pointer" value={"Bihar"}>Bihar</option>
        <option className="cursor-pointer" value={"Maharastra"}>Maharastra</option>
        <option className="cursor-pointer" value={"Goa"}>Goa</option>
      </select>
      <br />
      <h2 className="text-3xl font-bold">Selected City : {city}</h2>
    </div>
  );
};

export default RadioDropDown;
