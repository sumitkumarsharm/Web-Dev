import React from 'react'

const App = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2 bg-gray-800'>
      <h1 className='text-3xl font-bold  text-white'>Comment Form</h1>
      <form action="" className='border-2 px-6 py-5 rounded-xl w-[500px]  bg-gray-900 text-white'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name :</label>
          <input type="text" name="name" id="name " className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email " className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="comment">Comment :</label>
          <textarea name="comment" id="comment" cols="30" rows="10" className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border'> </textarea>
        </div>
        <button className=' w-full mt-6 py-1 rounded-xs border-1 bg-gray-800 active:scale-95 transition-all duration-300 ease-in-out' type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default App