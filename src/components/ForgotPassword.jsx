import React from "react";
import MainLogo from "../assets/Logo.svg";

const ForgotPassword = () => {
  return (
    <div>
      <div className="bg-white container mx-auto">
        <img src={MainLogo} alt="Company-Logo" className=" h-15 w-30 mx-auto" />
        <h1 className="font-bold text-center xl:text-3xl md:text-2xl text-xl ">
          Forgot your password?
        </h1>
        <p className=" text-center xs:max-w-[80%]  lg:max-w-[37%]  pt-5 text-lightGray text-lg mx-auto">
          Forgot your password, input your email we will send you an otp which
          will get you back into your account
        </p>

        <div className="  text-center ">
          <div className="lg:pr-[32%] pr-[40%] mt-5 mb-1 font-medium text-lighterGray  ">
            <label htmlFor="">Email</label>
          </div>
          <input
            type="text"
            placeholder="Enter your Email"
            className=" border-solid border-2 border-gray-200 p-3  rounded-md lg:w-[36%]  w-[50%]"
          />
        </div>
        <div className="text-center mt-5 mb-20">
          <button className="  p-3 px-6 pt-3 text-white bg-buttonBlueColor font-medium  rounded-md lg:w-[36%]   w-[50%]">
            Send Verificaton
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
