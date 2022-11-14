import React from 'react';
// import { storeProvider } from '../../../store/storeContext'
// import LoginForm from '../../../components/Login'
import Logo from '../../../assets/Vertical_RGB_294.svg'
import { Link } from 'react-router-dom';
// import {Wrapper} from './ForgottonPassword.styles'

const ResetPassword = () => {
  return (
         <section className=" dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="h-[7rem] w-[8rem] flex items-center text-2xl font-semibold text-gray-900 dark:text-white m-auto">
                <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />

              </a>
              <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]] dark:text-white">
              Reset your password?              
              </h1>

              <p className='text-center text-[16px] text-[#667085] font-[400] mt-[0]' style={{ marginTop: '0' }}>Reset your password,your password should be a very secure password</p>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Enter Password</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              
              <div>
                  <label for="password" className="block mb-2 text-sm font-medium text-[#344054] normal dark:text-white">Enter Password Again</label>
                  <input type="password" name="password" id="password" placeholder="••••••••" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>
              
              
            
                <Link to='/' type="submit" className="w-full text-white bg-[#3068AE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Reset Password</Link>
              
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
export default ResetPassword

