import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [allUserData, setAllUserData] = useState([])
  const handleFormData = (event) => {
    event.preventDefault()
    setAllUserData([...allUserData, formData])
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    })

    console.log(allUserData);

  }


  const handleChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }




  return (
    <div className='w-full h-screen flex gap-2 '>
      <div className='w-full  bg-neutral-800 flex items-center justify-center'>
        <form onSubmit={handleFormData} className=' border px-2.5 py-2.5 rounded-xl flex flex-col gap-6 bg-neutral-600 text-white'>
          <h1 className='text-center text-3xl font-bold'>Form Validation</h1>
          <div >
            <label htmlFor="username">Username : </label>
            <input
              className='w-full px-2 py-2 rounded-md border-2 border-neutral-400 outline-none focus:border-sky-500'
              type="text"
              id='username'
              name='username'
              onChange={handleChanges}
              value={formData.username}
              placeholder='Enter your name' />
          </div>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              className='w-full px-2 py-2 rounded-md border-2 border-neutral-400 outline-none focus:border-sky-500'
              type="text"
              id='email'
              name='email'
              onChange={handleChanges}
              value={formData.email}
              placeholder='Enter your name' />
          </div>
          <div>
            <label htmlFor="password">Password : </label>
            <input
              className='w-full px-2 py-2 rounded-md border-2 border-neutral-400 outline-none focus:border-sky-500'
              type="text"
              id='password'
              name='password'
              onChange={handleChanges}
              value={formData.password}
              placeholder='Enter your password' />
          </div>
          <div>
            <label htmlFor="confirmPassword">confirmPassword : </label>
            <input
              className='w-full px-2.5 py-2.5 rounded-md border-2 border-neutral-400 outline-none focus:border-sky-500'
              type="text"
              id='confirmPassword'
              name='confirmPassword'
              onChange={handleChanges}
              value={formData.confirmPassword}
              placeholder='please confirmPassword' />
          </div>

          <button
            className='w-full px-2.5 py-2.5 rounded-md  transition-all duration-300 ease-in-out outline-none hover:bg-sky-950 cursor-pointer hover:text-white bg-sky-700  font-bold'
            type='submit'>Submit</button>
        </form>
      </div>
      <div className='w-full flex items-center justify-center flex-col bg-neutral-800 h-screen px-10'>
        <h1 className='text-3xl font-bold text-white mb-10'>Form Data</h1>
        <div className='w-full 
        '>
          {
            allUserData.length > 0 ? (
              allUserData.map((data, index) => (
                <div
                  className='bg-neutral-600 px-2.5 py-2.5 rounded-md text-white mb-5 w-full'
                  key={index}>
                  <p>Username : {data.username}</p>
                  <p>Email : {data.email}</p>
                  <p>Password : {data.password}</p>
                  <p>ConfirmPassword : {data.confirmPassword}</p>
                </div>
              ))
            ) : (
              <p className='text-white text-center'>No data found</p>
            )
          }
        </div>
        <div>


        </div>
      </div>
    </div>
  )
}

export default App
