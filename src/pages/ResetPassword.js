import React, { useState } from 'react'
import loginIcons from '../assest/assest/signin.gif'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState();
  const [data, setData] = useState({
      password : "",
      confirmPassword: "",
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

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // console.log("Data resetPassword ", data)
  
  return (
    <section id="sign-up">
    <div className='mx-auto container p-4'>

        <div className='bg-gray-100 border-4 rounded p-4 w-full max-w-sm mx-auto'>

            <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                <div>
                  <img src={data.profilePic || loginIcons} alt='login icons'/>
                </div>

            </div>

            <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
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

              <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[200px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>
                <Link to={'/login'}>Reset Password</Link>
              </button>
            </form>
        </div>

    </div>
</section>
  )
}

export default ResetPassword