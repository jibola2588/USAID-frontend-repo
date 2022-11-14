import React, { useContext } from 'react';
import { Wrapper } from './Login.styles';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Vertical_RGB_294.svg'



 const Login = () => {
  return (
    <Wrapper>
      <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="h-[7rem] w-[8rem] flex items-center text-2xl font-semibold text-gray-900 dark:text-white m-auto">
                <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />

              </a>
              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]] dark:text-white">
                Log in to your account
              </h1>

              <p className='text-center text-[16px] text-[#667085] font-[400] mt-[0]' style={{ marginTop: '0' }}>Welcome back! Please enter your details.</p>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label for="email" className="block mb-2 text-sm font-medium text-[#344054] dark:text-white">Email</label>
                  <input type="email" name="email" id="email" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                </div>
                <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label for="remember" className="text-[#344054] font-[500] dark:text-gray-300">Remember Password</label>
                    </div>
                  </div>
                  <Link to='/forgottonPassword' className="text-sm font-medium text-[#3068AE] hover:underline dark:text-primary-500">Forgot password?</Link>
                </div>
            
                <Link to='/verifyEmail' type="submit" className="w-full text-white bg-[#3068AE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Sign in</Link>
              
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}
export default Login
