import React from 'react'
import { useState } from 'react'

const App = () => {
  const [comment, setComment] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [showComment, setShowComment] = useState([])

  const handleFormData = (event) => {
    event.preventDefault()
    setShowComment([...showComment, comment])
    setComment({
      name: '',
      email: '',
      comment: '',
    })
    console.log(showComment);

  }

  const handleChanges = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <div className='w-full h-screen flex items-center justify-center flex-col gap-2 bg-gray-800'>
      <h1 className='text-3xl font-bold  text-white'>Comment Form</h1>
      <form onSubmit={handleFormData} className='border-2 px-6 py-5 rounded-xl w-[500px]  bg-gray-900 text-white'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="name">Name :</label>
          <input
            onChange={handleChanges}
            value={comment.name}
            type="text" name="name" id="name " className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email :</label>
          <input
            onChange={handleChanges}
            value={comment.email}
            type="email" name="email" id="email " className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border' />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="comment">Comment :</label>
          <textarea
            onChange={handleChanges}
            value={comment.comment}
            name="comment" id="comment" cols="30" rows="10" className='px-2.5 py-2 outline-none transition-all duration-200 rounded-md focus:border-blue-600 border'> </textarea>
        </div>
        <button className=' w-full mt-6 py-1 rounded-xs border-1 bg-gray-800 active:scale-95 transition-all duration-300 ease-in-out' type="submit">Add Comment</button>
      </form>
    </div>
  )
}

export default App