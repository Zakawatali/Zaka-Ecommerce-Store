import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import iconphone from "../assets/icons-phone.png";
import iconemail from "../assets/icons-mail.png";
const Contact = () => {
  return (
    <div className="" >   
      {/* Home Navigation Bar start */}
       <div className=" p-5  ml- 2 md:ml-10 ">
              <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" to="/">
          Home
        </Link>
        
        <Typography sx={{ color: 'text.primary' }}>Contact</Typography>
      </Breadcrumbs>
            </div> 
            {/* Home Navigation Bar start */}   
            <div className="flex  justify-between flex-col md:flex-row mx-1 sm:mx-5 md:mx-12 p-2   ">
              <div className="space-y-6">
                <div className="p-2 space-y-3">
                  <div className="flex items-center gap-3 p-2 ">
                    <img src={iconphone} alt="hkh" className="h-10 w-10  rounded-full" />
                    <h2 className="text-xl font-semibold text-gray-800 ">Call To Us</h2>

                  </div>
                <p className="px-2 text-gray-800">We are available 24/7 days a week</p>
                <p className="px-2 text-gray-800">Phone: +923331008649</p></div>
                <div className="border border-gray-400 mx-4"></div>
                 <div className="p-2 space-y-3">
                  <div className="flex items-center gap-3 p-2 ">
                    <img src={iconemail} alt="hkh" className="h-10 w-10  rounded-full" />
                    <h2 className="text-xl font-semibold text-gray-800 ">Write To Us</h2>

                  </div>
                <p className="px-2 text-gray-800">Fill out our form and we will contact you within 24 hours</p>
                <p className="px-2 text-gray-800">Emails: customer@exclusive.com</p>
                <p className="px-2 text-gray-800">Emails: support@exclusive.com</p>
                </div>
                
              </div>
              {/* right side message form start */}
              
                <div className=" pr-2 md:pr-0 ">
                  <form className="space-y-4" >
                  <div className="grid grid-col-1 sm:grid-cols-3 w-full ">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="bg-gray-200 rounded-sm p-2 m-2 w-full sm:w-64"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="bg-gray-200 rounded-sm p-2 m-2 w-full sm:w-64"
                    />
                    <input
                      type="number"
                      placeholder="Your Phone"
                      className="bg-gray-200 rounded-sm p-2 m-2 w-full sm:w-64"
                    />
                  </div>
                  <div className="">
                    <textarea
                      placeholder="Your Message"
                      className="  bg-gray-200  rounded-md p-2 m-2 w-full h-50"
                    ></textarea>
                  </div>
                  <div className="flex justify-end ">
                    <button className="bg-red-800 text-white px-4 py-2  rounded-sm hover:bg-red-700">
                      Send Message
                    </button>
                  </div>

                </form>
                </div>
                  
              
            </div>
    </div>
  );
}   
export default Contact;