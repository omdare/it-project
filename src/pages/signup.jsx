import { Input, Select } from "antd";
import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { toast } from "sonner";


const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !fullname || !gender || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    // Simulate success
    toast.success("Signup successful!");
    setTimeout(() => navigate("/login"), 2000);
  };


//   const newUser = async (e) => {
//   e.preventDefault();

//   try {
//     if (
//       email.trim() === "" ||
//       fullname.trim() === "" ||
//       gender.trim() === "" ||
//       password.trim() === ""
//     ) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     // Simulate success (replace with actual API later)
//     toast.success("Registration successful");
//     navigate("/login");

//   } catch (error) {
//     toast.error(error.response?.data?.message ?? "Client-side error");
//   }
// };


  // const newUser = async (e) => {
  //   e.preventDefault();
  //   // setLoading(true)
  //   try {
  //     if (
  //       email.trim() === "" ||
  //       fullname.trim() === "" ||
  //       gender.trim() === "" ||
  //       password.trim() === ""
  //     ) {
  //       toast.error("please fill in all fields");
  //     } else if (password !== confirmPassword) {
  //       toast.error("Password does not match");
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.message ?? "client side error");
  //   }
  // };

  return (
    <>
      <div className="min-h-screen flex flex-wrap">
        <div className="md:flex-1 w-[100%]  p-5 text-center flex justify-center items-center signup"></div>

        <div className="md:flex-1 w-[100%] flex justify-center items-center bg-slate-200">
          {/* <Zoom> */}
          <form
            className=" flex flex-col gap-4 bg-grey  p-5 w-[max-content] rounded-xl "
            onSubmit={handleSubmit}
          >
            <div className="">
              <h1 className="text-2xl text-blue-500 font-bold">Sign Up</h1>
              <small>Rent your cars</small>
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <label htmlFor="">Email</label>
              <Input
                type="text"
                placeholder="Enter Email"
                className=""
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <label htmlFor="">Full Name</label>
              <Input
                type="text"
                placeholder="Enter Full Name"
                className=""
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <label htmlFor="">Gender</label>
              <Select
                placeholder={"Select gender"}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "female" },
                ]}
                onChange={(value) => {
                  setGender(value);
                }}
              />
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <label htmlFor="">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                className=""
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <label htmlFor="">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm password"
                className=""
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />
            </div>
            <div className=" flex flex-col gap-1 w-[300px] md:w-[400px]">
              <input
                type="submit"
                className="cursor-pointer border-none bg-blue-500 w-[max-content] py-2 px-5 rounded-md text-black font-bold"
                value={"Sign up"}
              />
            </div>
            <div>
              <span>
                Already have an Account ? <Link to={"/login"}>Sign In</Link>
              </span>
            </div>
          </form>
          {/* </Zoom> */}
        </div>
      </div>

      {/* <div className={loading ? 'fixed top-0 left-0 w-[100%] bg-opacity h-[100%] z-[483437]  flex justify-center items-center' : "hidden"}>
                <h1 className='text-xl md:text-3xl'>Loading...</h1>
        </div> */}
    </>
  );
};

export default Signup;
