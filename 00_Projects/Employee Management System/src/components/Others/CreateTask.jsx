import React from "react";

const CreateTask = () => {
  return (
    <div className="bg-neutral-800 mt-10 p-6 rounded-xl">
      <form className="flex justify-between items-center ">
        <div className="w-1/2 flex flex-col gap-5">
          <div>
            <h3 className="text-xl mb-1">Task Title :</h3>
            <input
              className="w-4/5 border text-sm rounded py-1 px-2 outline-none"
              type="text"
              placeholder="Make a UI Design.."
            />
          </div>
          <div>
            <h3 className="text-xl mb-1">Date :</h3>
            <input
              className="w-4/5 border text-sm rounded py-1 px-2 outline-none"
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-xl mb-1">Assign to : </h3>
            <input
              className="w-4/5 border text-sm rounded py-1 px-2 outline-none"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-xl mb-1">Catogray :</h3>
            <input
              className="w-4/5 border text-sm rounded py-1 px-2 outline-none"
              type="text"
              placeholder="Design, dev etc..."
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex flex-col rounded-sm ">
            <h3 className="text-xl ">Discription :</h3>
            <textarea
              className="border rounded-sm outline-none px-2 py-1"
              name=""
              id=""
              cols={30}
              rows={9}
            ></textarea>
          </div>
          <button className="border bg-teal-500 rounded-sm py-2 outline-none border-black ">
            Crate Tesk
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
