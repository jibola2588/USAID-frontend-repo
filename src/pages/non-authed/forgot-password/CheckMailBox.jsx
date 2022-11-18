import React from 'react'
import Logo from '../../../assets/Vertical_RGB_294.svg'


const CheckMailBox = () => {
  return (
    <section className=" dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

      <div className="w-full bg-white rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="">
          <a href="#" className="h-[7rem] w-[8rem] flex items-center text-2xl font-semibold text-gray-900 dark:text-white m-auto">
            <img className="w-[100%] h-[100%] object-fit" src={Logo} alt="" />

          </a>
          <h1 className="normal mt-[0] font-[600] font-[inter] text-[30px] text-center leading-tight tracking-tight text-gray-900 md:text-[35px]] dark:text-white">
          Check your mailbox         
           </h1>

          <p className='text-center text-[16px] text-[#667085] font-[400] mt-[0] max-w-[26rem] m-auto' style={{ marginTop: '0' }}>Hello we sent you a mail to ekpenyong2510@gmail.com you provided, containing procedure on how to recover your account </p>
         
        </div>
      </div>
    </div>
  </section>
  )
}

export default CheckMailBox