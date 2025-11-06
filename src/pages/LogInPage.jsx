
import pic1 from "../../public/MobilepicLogin.png"; 
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="bg-white flex flex-col md:flex-row h-screen justify-evenly items-center">
      {/* Left image */}
      <div className="hidden  mt-10 md:block w-full mx-auto md:w-1/2  md:h-full overflow-hidden">
        <img
          src={pic1}
          alt="Login"
          className="w-full h-full  object-contain md:object-cover"
        />
      </div>

      {/* Right form */}
      <div className="w-full p-4 mx-auto md:w-1/2 flex flex-col justify-center items-center">
        <div className="space-y-8 w-3/4">
          <h1 className="text-3xl font-semibold text-red-500">Log in to Exclusive</h1>
          <p>Enter your detail below</p>
          <input
            type="text"
            className="border-b border-gray-400 text-gray-500 p-2 w-full focus:outline-none"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            className="border-b border-gray-400 text-gray-500 p-2 w-full focus:outline-none"
            placeholder="Password"
          />
        </div>

        <div className="flex justify-between items-center w-3/4 mt-10">
          <button className="px-4 py-2.5 rounded-sm bg-red-500 text-white hover:bg-red-700 transition duration-300">
            Log In
          </button>
          <p className="text-red-500">Forget Password?</p>
        </div >
        
            <p className="p-5 mt-4  ">New here? <Link to="/SignUp" className="text-md underline">Sign Up</Link></p>
           
      </div>
    </div>
  );
};

export default LoginPage;
