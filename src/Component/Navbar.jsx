import { Link } from "react-router-dom";
import { Search, Heart, ShoppingCart, X, ChevronDown, TextAlignJustify } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="" >
      {/* 🔸 Top black banner */}
      <div className="bg-black  h-14 flex justify-between items-center text-white px-6 md:px-14">
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
      <nav className="flex items-center justify-between bg-white border-b border-gray-100 shadow-md py-3 px-6 md:px-14">
        
        {/* ✅ Hamburger icon (mobile only, left side) */}
        <div className="flex items-center gap-3">
          
          <h2 className="font-bold text-xl">Exclusive</h2>
        </div>
        

        {/* 🔹 Menu links (hidden on mobile) */}
        <div className="hidden md:flex gap-6">
          <Link className="hover:underline underline-offset-7" to="/">Home</Link>
          <Link className="hover:underline underline-offset-7" to="/about">About</Link>
          <Link className="hover:underline underline-offset-7" to="/contact">Contact</Link>
          <Link className="hover:underline underline-offset-7" to="/SignUp">Sign Up</Link>
        </div>
        {/* <div className="flex items-center gap-3">
         
          
        </div> */}

        {/* 🔹 Right side icons */}
        <div className="flex items-center gap-5">
          <div className="relative hidden sm:block w-64">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full pl-4 pr-10 bg-gray-100 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
          <Heart className="hidden md:block w-5 h-5" />
          <ShoppingCart className="hidden md:block w-5 h-5" />
           <TextAlignJustify className="block md:hidden w-6 h-6 text-gray-700" />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
