import React from "react";
import { Input } from "antd";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import tesla_image from "../assets/tesla.jpg";
import img_repl from "../assets/bmw.jpg";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex flex-wrap justify-center login">
        <div className="">
          <div className="flex items-center justify-center mb-10 mt-20">
            <h1 className="text-5xl text-slate-300 font-semibold">Login</h1>
          </div>

          <form className=" flex flex-col gap-15  p-5 w-[max-content]">
            <div className=" flex items-center justify-center w-[400px] h-[50px] rounded-full ">
              <IoPerson />
              <input
                type="email"
                placeholder="Enter your email"
                className="border-none outline-none w-[400px] flex gap-5 items-center  rounded-full bg-blue-200 p-2 h-[50px]"
              />
            </div>

            <div className="flex items-center w-[400px] h-[50px]  gap-5 p-2 bg-blue-200 rounded-full">
              <IoLockClosedOutline />
              <input
                type="password"
                placeholder="Enter your password"
                className="border-none outline-none "
              />
            </div>

            <div className=" flex flex-col gap-1 w-[400px] ">
              <input
                type="submit"
                className="cursor-pointer border-none bg-blue-700  py-5 px-5 rounded-full text-white font-bold"
              />
            </div>
            <div className="text-2xl text-white">
              <span>
                Don't have an Account ?{" "}
                <Link to={"/signup"} className="text-red-700">
                  {" "}
                  Sign Up
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
