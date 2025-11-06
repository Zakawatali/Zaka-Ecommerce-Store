
import pic1 from "../../public/MobilepicLogin.png"; 
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
const SignUp = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row h-screen justify-evenly items-center">
      {/* Left image */}
      <div className="hidden md:block w-full mt-10 mx-auto md:w-1/2  md:h-full overflow-hidden">
        <img
          src={pic1}
          alt="Login"
          className="w-full h-full  object-contain md:object-cover"
        />
      </div>

      {/* Right form */}
      <div className="w-full p-4 mx-auto md:w-1/2 flex flex-col justify-center items-center ">
        <div className="space-y-8 w-3/4">
          <h1 className="text-3xl font-semibold text-red-500">Create an Account!</h1>
          <p>Enter your details Below</p>
          <input
            type="text"
            className="border-b border-gray-400 text-gray-500 p-2 w-full focus:outline-none"
            placeholder="Name"
          />
          <input
            type="text"
            className="border-b border-gray-400 text-gray-500 p-2 w-full focus:outline-none"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            className="border-b mb-8 border-gray-400 text-gray-500 p-2 w-full focus:outline-none"
            placeholder="Password"
          />
        </div>
        

        
          <button className="px-4  w-3/4 py-2.5 mx-4 rounded-md bg-red-500 text-white ">
            Sign Up
          </button>
          <div className="w-3/4 mt-4">
  <button className="w-full border border-gray-500 py-2.5 rounded-md bg-white text-black flex justify-center items-center gap-2">
    <img src="https://www.citypng.com/public/uploads/preview/google-logo-icon-gsuite-hd-701751694791470gzbayltphh.png" alt=""  className="h-5 w-5 mr-2"/>
    Continue With Google
  </button>
</div>
        
         <p className="p-5 mt-4 text-gray-500  ">Already have account?<Link to="/LogInPage" className="text-md underline">Login</Link></p>
      </div>
      
    </div>
  );
};

export default SignUp;
