 import { Breadcrumbs, Link, Typography } from "@mui/material";
 const MyAccount = () => {
    return(
        <div className="w-full space-y-4">
            {/* Back to home option is start */}
            <div className=" flex justify-between p-5  ml- 2 md:ml-10 ">
        <Breadcrumbs aria-label="breadcrumb">
       <Link underline="hover" color="inherit" to="/">
        Home
       </Link>
  
        <Typography sx={{ color: 'text.primary' }}>My Account</Typography>
        </Breadcrumbs>
        <div className="mr-8">
            <p>Welcome!<span className="text-red-700"> Zakawat Ali</span></p>
        </div>
      </div>
      {/* Back to home option is end */}
      {/* My Account body container is start */}
      <div className="flex flex-col sm:flex-row justify-between  p-5  ml- 2 md:mx-10 ">
        {/* left side conatainer is stsrt */}
        <div className="w-full sm:w-1/3 space-y-6 ">
            {/* my account dashboard start */}
            <div className="w-full space-y-2">
                <p className="text-lg font-semibold">Manage My Account</p>
                <div className="w-full space-y-1 mx-6 text-gray-800">
                    <ul>
                        <li className="text-red-700">My Profile</li>
                        <li>Address Book</li>
                        <li>My Payment Option</li>
                    </ul>
                </div>
            </div>
            {/* my account dashboard end */}
            {/* my order dashboard start */}
             <div className="w-full space-y-2">
               <p className="text-lg font-semibold"> My Orders</p>
                <div className="w-full space-y-1 mx-6 text-gray-800">
                    <ul>
                        <li>My Returns</li>
                        <li>My Concellation</li>
                        <li>My Payment Option</li>
                    </ul>
                </div>
            </div>
             {/* my order dashboard end */}
             {/* my WishList dashboard start */}
             <div>
                <p className="text-lg font-semibold">My WishList</p>
                
                </div>
                {/* my WishList dashboard end */}
           
        </div>
        {/* left side conatainer is end */}
         {/* Right side conatainer is stsrt */}
        <div className="space-y-5 py-6">
            <p className="text-xl font-bold text-red-700">Edit Your Profile</p>
            <form action="">
                <div className="w-full">
                   <div  className=" w-full grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 mb-4">
                     <div className="flex flex-col">
                          <label htmlFor="firstName" className="w-full font-semibold md:w-48 ">First Name</label>
                          <input type="text" id="firstName" className=" bg-gray-200  mt-1 text-gray-700  rounded-md p-3 w-full sm:w-96"/>
                      </div>
                      <div  className="flex flex-col">
                          <label htmlFor="lastName" className="w-full font-semibold md:w-48">Last Name</label>
                          <input type="text" id="lasttName" className="bg-gray-200 mt-1 text-gray-700  rounded-md p-3 w-full sm:w-96"/>
                      </div>
                      <div className="flex flex-col">
                          <label htmlFor="email" className="w-full font-semibold md:w-48">Email</label>
                          <input type="email" id="email" className="bg-gray-200  mt-1 text-gray-700  rounded-md p-3 w-full sm:w-96"/>
                      </div>
                      <div className="flex flex-col">
                          <label htmlFor="Address" className="w-full font-semibold md:w-48">Address</label>
                          <input type="text" id="address" className="bg-gray-200  mt-1 text-gray-700  rounded-md p-3 full sm:w-96"/>
                      </div>
                    
                   </div>
                   <div  className=" w-full grid grid-cols-1  gap-1 sm:gap-4 mb-4">
                      <label htmlFor="Address" className="w-full font-semibold md:w-48">Password Changes</label>
                      <input type="text" id="address" placeholder="Current Password" className="bg-gray-200  mt-1 text-gray-700  rounded-md p-3 full "/>
                      <input type="text" id="address" placeholder="New Password" className="bg-gray-200  mt-1 text-gray-700  rounded-md p-3 full "/>
                      <input type="text" id="address" placeholder="Conform New Password" className="bg-gray-200  mt-1 text-gray-700  rounded-md p-3 full "/>
                    </div>
                </div>
                <div className="flex justify-end mt-6 gap-4">
                   
                    <button className=" bg-gray-300 text-black px-6 py-2 rounded-sm hover:bg-gray-400">Cancel</button>
                    <button className="bg-red-700 text-white px-6 py-2 rounded-sm hover:bg-red-800">Save Changes</button>
                </div>
            </form>
        </div>
        {/* Right side conatainer is end */}
      </div>
        </div>
    )
}
export default MyAccount