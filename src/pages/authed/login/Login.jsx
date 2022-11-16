import React, { useContext,useState,useRef,} from 'react';
import { Wrapper } from './Login.styles';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Vertical_RGB_294.svg'
import { FaEye, FaEyeSlash } from 'react-icons/fa'


 const Login = () => {

  const [viewPassword, setViewPassword] = useState(true);
  const numberInput = useRef(null);


  const togglePasswordView = () => {
    setViewPassword(!viewPassword);
    viewPassword == true
      ? (numberInput.current.type = "text")
      : (numberInput.current.type = "password");
  };

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  return (
    <Wrapper>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="h-[7rem] w-[8rem] flex items-center m-auto">
                <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />

              </a>
              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]">
                Log in to your account
              </h1>

              <p className='text-center text-[16px] text-[#667085] font-[400] mt-[0]' style={{ marginTop: '0' }}>Welcome back! Please enter your details.</p>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">Email</label>
                  <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400" placeholder="Enter your email" required />
                </div>
                <div className='relative'>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Password</label>
                  <input 
                  type={numberInput} 
                  name="password" 
                  id="password" 
                  placeholder="Enter your password"
                   ref={numberInput}
                  className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  required />

                   <span class="absolute  inline-flex items-center right-4 top-[55%]">
                <div className="flex justify-end">
                  {viewPassword ? (
                    < FaEye 
                    style = {{width:22, height:20,color:'#344054'}}
                    onClick={ togglePasswordView } />
            
                  ) : (
                    < FaEyeSlash 
                    style = {{ width:22, height:20,color:'#344054'}}
                    onClick={ togglePasswordView }  />
                  )
                  }       
                   </div>
              </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-[#344054] font-[500] dark:text-gray-300">Remember Password</label>
                    </div>
                  </div>
                  <Link to='/forgottonPassword' className="text-sm font-medium text-[#3068AE] hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
            
                <Link to='/verifyEmail' type="submit" className="w-full text-white bg-[#3068AE] hover:bg-primary-700 rounded-lg text-sm px-5 py-2.5 text-center outline-none">Sign in</Link>
              
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Login
