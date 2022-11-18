import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Vertical_RGB_294.svg'



const VerifyEmail = () => {
  return (
    <div>
        <div class="h-screen bg-white py-20 px-3">
    <div class="container mx-auto">
    <a href="#" className="h-[7rem] w-[8rem] flex items-center text-2xl font-semibold text-gray-900 dark:text-white m-auto">
                <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />

              </a>
        <div class="max-w-sm mx-auto md:max-w-lg">
            <div class="w-full">
                <div class="bg-white h-64 py-3 rounded text-center">
                      <h1 class="text-2xl font-bold">Verify Your Account</h1>
                      <div class="flex flex-col mt-4">
                          <span className='font-[600] font-inter text-[12px] text-[#667085] max-w-[19rem] m-auto'>Let us quickly verify you’re the one requesting to login. An email has been sent to Emmyjax@gmail.com</span>
                          {/* <span class="font-bold">+91 ******876</span> */}
                      </div>
                      
                      <div id="otp" class="flex flex-row justify-center items-center text-center px-2 mt-5">
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="first" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="second" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="third" maxlength="1" /> <span>-</span>
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="fourth" maxlength="1" />
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="fifth" maxlength="1" /> 
            <input class="m-2 border h-10 w-10 text-center form-control rounded" placeholder='0' type="text" id="sixth" maxlength="1" />
                      </div>
                      
                      <div class="flex justify-center text-center mt-5">
                      <Link to='/verifyEmail' type="submit" className="w-[50%] text-white bg-[#3068AE] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 outline-none">Verify</Link>
                      </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default VerifyEmail