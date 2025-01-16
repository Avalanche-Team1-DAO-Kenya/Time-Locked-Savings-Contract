import React, { useState } from 'react'
import loginIcons from '../assest/assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import imageToBase64 from '../helpers/imageTobase64';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState();
  const [data, setData] = useState({
      email : "",
      password : "",
      name: "",
      confirmPassword: "",
      profilePic: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((preve) =>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]
    const imagePic = await imageToBase64(file)

    // console.log("imagePic", imagePic)

    setData((preve) => {
      return{
        ...preve,
        profilePic : imagePic
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // console.log("Data login ", data)
  
  return (
    <section id="sign-up">
    <div className='mx-auto container p-4'>

        <div className='bg-gray-100 border-4 rounded p-4 w-full max-w-sm mx-auto'>

            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                  <img src={data.profilePic || loginIcons} alt='login icons'/>
                </div>
                <form>
                  <label>
                    <div className='text-xs bg-opacity-80 cursor-pointer bg-slate-200 pb-4 pt-2 text-center absolute bottom-0 w-full'>
                      Upload Photo
                    </div>
                    <input type='file' className='hidden' onChange={handleUploadPic}/>
                  </label>
                </form>

            </div>

            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
            <div className='grid'>
                <label>Name :</label>
                <div className='bg-slate-200 p-2'>
                  <input 
                      type='text'
                      placeholder='enter your name' 
                      className='w-full h-full outline-none bg-transparent'
                      name='name'
                      value={data.name}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>
              <div className='grid'>
                <label>Email :</label>
                <div className='bg-slate-200 p-2'>
                  <input 
                      type='email'
                      placeholder='enter email' 
                      className='w-full h-full outline-none bg-transparent'
                      name='email'
                      value={data.email}
                      onChange={handleChange}
                      required
                  />
                </div>
              </div>

              <div>
                <label>Password :</label>
                <div className='bg-slate-200 p-2 flex'>
                  <input 
                      type={showPassword ? "" : "password"}
                      placeholder='enter password' 
                      className='w-full h-full outline-none bg-transparent'
                      name='password'
                      value={data.password}
                      onChange={handleChange}
                      required
                  />
                  <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve) => !preve)}>
                    <span>
                      {
                        showPassword ? (
                          <FaEyeSlash />
                        )
                        :
                        (
                          <FaEye />
                        )
                      }                    
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label>Confirm Password :</label>
                <div className='bg-slate-200 p-2 flex'>
                  <input 
                      type={showConfirmPassword ? "" : "password"}
                      placeholder='enter confirm password' 
                      className='w-full h-full outline-none bg-transparent'
                      name='confirmPassword'
                      value={data.confirmPassword}
                      onChange={handleChange}
                      required
                  />
                  <div className='cursor-pointer text-xl' onClick={()=>setshowConfirmPassword((preve) => !preve)}>
                    <span>
                      {
                        showConfirmPassword ? (
                          <FaEyeSlash />
                        )
                        :
                        (
                          <FaEye />
                        )
                      }                    
                    </span>
                  </div>
                </div>
              </div>

              <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>
            </form>
            <p className='my-5'>Already have an account ? <Link to={'/login'} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>

        </div>

    </div>
</section>
  )
}

export default SignUp