import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
const NotFound = () => {
  return (
    <div className=" ">   
        <div className=" p-5  ml- 2 md:ml-10 ">
        <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" to="/">
    Home
  </Link>
  
  <Typography sx={{ color: 'text.primary' }}>404 Error</Typography>
</Breadcrumbs>
      </div> 
      <div className="flex flex-col justify-center items-center space-y-10 p-4">
      <h1 className=" text-xl sm:text-2xl md:text-4xl lg:text-6xl font-semibold text-center mt-20">404 Not Found</h1>
      <p className="text-center mt-4">Your Visited page not fonud. You may go home page</p>
      <Link to="/">
      <button  className="bg-red-700 p-2 rounded-sm px-3 text-white">Back to Home Page</button>
      </Link>
      </div>
    </div>
  );
}   
export default NotFound;