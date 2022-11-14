import React from "react";
import MainLogo from "../assets/Logo.svg";

const CheckMailBox = () => {
  return (
    <div>
      <div className="bg-white container mx-auto">
        <img src={MainLogo} alt="Company-Logo" className=" h-15 w-30 mx-auto" />
        <h1 className="font-bold text-center xl:text-3xl md:text-2xl text-xl">
          Check your mailbox
        </h1>
        <p className=" text-center xs:max-w-[80%]  lg:max-w-[46%] max-w-[100%] pt-5 mb-32 text-lightGray text-lg mx-auto">
          Hello we sent you a mail to{" "}
          <span className="font-bold">ekpenyong2510@gmail.com</span> you
          provided, containing procedure on how to recover your account
        </p>
      </div>
    </div>
  );
};

export default CheckMailBox;
