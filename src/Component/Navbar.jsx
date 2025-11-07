// import { Link } from "react-router-dom";
// import { Search, Heart, ShoppingCart, X, ChevronDown, TextAlignJustify,UserRound } from "lucide-react";

// const Navbar = () => {
//   return (
//     <nav className="" >
//       {/* 🔸 Top black banner */}
//       <div className="bg-black h-16  sm:h-13 flex justify-between items-center text-white px-6 md:px-14">
//         <div className="flex items-center">
//           <X className="h-5 w-5" />
//           <p className="ml-2 text-sm">
//             Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
//           </p>
//         </div>
//         <div className="flex items-center">
//           <p className="text-md p-2">English</p>
//           <ChevronDown className="w-5 h-5" />
//         </div>
//       </div>

//       {/* 🔸 Main Navbar */}
//       <nav className="flex items-center h-18 justify-between bg-white border-b border-gray-300 shadow-sm py-3 px-6 md:px-14">
        
//         {/* ✅ Hamburger icon (mobile only, left side) */}
//         <div className="flex items-center gap-3">
          
//           <h2 className="font-bold text-xl">Exclusive</h2>
//         </div>
        

//         {/* 🔹 Menu links (hidden on mobile) */}
//         <div className="hidden md:flex gap-6">
//           <Link className="hover:underline underline-offset-7" to="/">Home</Link>
//           <Link className="hover:underline underline-offset-7" to="/about">About</Link>
//           <Link className="hover:underline underline-offset-7" to="/contact">Contact</Link>
//           <Link className="hover:underline underline-offset-7" to="/SignUp">Sign Up</Link>
//         </div>
//         {/* <div className="flex items-center gap-3">
         
          
//         </div> */}

//         {/* 🔹 Right side icons */}
//         <div className="flex items-center gap-5">
//           <div className="relative hidden sm:block w-64">
//             <input
//               type="text"
//               placeholder="What are you looking for?"
//               className="w-full pl-4 pr-10 bg-gray-100 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
//           </div>
//           <Heart className="hidden md:block w-5 h-5" />
//           <ShoppingCart className="hidden md:block w-5 h-5" />
//           <Link to="/My-account"><UserRound className="hidden md:block bg-red-600 rounded-full p-1 filter revert text-white w-5 h-5" /></Link>
//            <TextAlignJustify className="block md:hidden w-6 h-6 text-gray-700" />
//         </div>
//       </nav>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingCart,
  X,
  ChevronDown,
  TextAlignJustify,
  UserRound,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // 🔹 Menu toggle state

  return (
    <nav>
      {/* 🔸 Top black banner */}
      <div className="bg-black h-16 sm:h-13 flex justify-between items-center text-white px-6 md:px-14">
        <div className="flex items-center">
          <X className="h-5 w-5" />
          <p className="ml-2 text-sm">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
        </div>
        <div className="flex items-center">
          <p className="text-md p-2">English</p>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>

      {/* 🔸 Main Navbar */}
      <div className="flex items-center justify-between bg-white border-b border-gray-300 shadow-sm py-3 px-6 md:px-14 relative">
        {/* ✅ Brand */}
        <h2 className="font-bold text-xl">Exclusive</h2>

        {/* 🔹 Desktop Menu Links */}
        <div className="hidden md:flex gap-6">
          <Link className="hover:underline underline-offset-7" to="/">
            Home
          </Link>
          <Link className="hover:underline underline-offset-7" to="/about">
            About
          </Link>
          <Link className="hover:underline underline-offset-7" to="/contact">
            Contact
          </Link>
          <Link className="hover:underline underline-offset-7" to="/SignUp">
            Sign Up
          </Link>
        </div>

        {/* 🔹 Right side icons */}
        <div className="flex items-center gap-5">
          {/* 🔍 Search Bar (desktop only) */}
          <div className="relative hidden sm:block w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-4 pr-10 bg-gray-100 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* ❤️ 🛒 👤 Icons */}
          <Heart className="hidden md:block w-5 h-5" />
          <ShoppingCart className="hidden md:block w-5 h-5" />
          <Link to="/My-account">
            <UserRound className="hidden md:block bg-red-600 rounded-full p-1 text-white w-5 h-5" />
          </Link>

          {/* ☰ Hamburger / ✖ Cross Icon (Mobile only) */}
          <div
            className="block md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <TextAlignJustify className="w-6 h-6 text-gray-700" />}
          </div>
        </div>

        {/* 🔹 Mobile Menu (slide from left) */}
        <div
          className={`fixed top-30 left-0   bg-white shadow-lg border-r border-gray-200 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Menu</h2>
            <ul className="flex flex-col gap-6">
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/SignUp" onClick={() => setIsOpen(false)}>Sign Up</Link>
              <Link to="/My-account" onClick={() => setIsOpen(false)}>My Account</Link>
            </ul>
          </div>
        </div>

       
      </div>
    </nav>
  );
};

export default Navbar;
