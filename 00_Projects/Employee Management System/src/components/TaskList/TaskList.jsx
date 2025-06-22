import React from "react";

const TaskList = () => {
  let CurrentData = new Date();
  let TodayDate = CurrentData.toLocaleDateString();

  return (
    <div
      id="taskList"
      className="h-[60%] overflow-x-auto w-full py-5 mt-12 gap-5 flex items-center flex-nowrap justify-between"
    >
      <div className=" h-full w-96 bg-red-300 rounded-xl p-5 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-blue-400 rounded-xl p-5  flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-green-400 rounded-xl  p-5 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-emerald-400 rounded-xl p-5 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-amber-600 rounded-xl p-5  flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-cyan-600 rounded-xl p-5  flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-sky-400 rounded-xl  p-5 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
      <div className=" h-full w-96 bg-yellow-400 rounded-xl  p-5 flex-shrink-0 ">
        <div className="flex justify-between items-center ">
          <p className="bg-red-500 px-2 py-1 rounded-sm">High</p>
          <p className="text-xl ">{TodayDate}</p>
        </div>
        <h2 className=" mt-5 text-3xl font-semibold ">Make a youtube video</h2>
        <p className="mt-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad officiis
          sit libero hic iste quibusdam!
        </p>
      </div>
    </div>
  );
};

export default TaskList;
