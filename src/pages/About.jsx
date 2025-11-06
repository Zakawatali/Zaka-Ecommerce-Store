

// import pic2 from "../../public/aboutPic.png"; 
import pic from "../assets/aboutpic.jpg";
import pic2 from "../assets/Icon-Shop.png";
import pic3 from "../assets/Icon-Sale.png";
import pic4 from "../assets/Icon-Shopping-bag.png";
import pic5 from "../assets/Icon-Moneybag.png";
import pic6 from "../assets/icon-delivery.png";
import pic7 from "../assets/Icon-Customer-service.png";
import pic8 from "../assets/Icon-secure.png";
import Sliderimg1 from "../assets/Sliderimg1.png";
import Sliderimg2 from "../assets/Slideimg2.png";
import Sliderimg3 from "../assets/Sliderimg3.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import "swiper/css/autoplay";


import { Facebook, Instagram, Twitter } from "lucide-react";


import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
 


const About = () => {
   const cards = [
  {
    id: 1,
    title: "Tom Cruise",
    text: "Founder and Chairman ",
    image:Sliderimg1, // 
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    id: 2,
    title: "Emma Watson",
    text: "Managing Director",
    image: Sliderimg2,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    id: 3,
    title: "Will Smith",
    text: "Product Designer",
    image: Sliderimg3,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
   {
    id: 4,
    title: "Zakawat Ali ",
    text: "Full Stack Developer",
    image:Sliderimg1,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
   {
    id: 5,
    title: "Christian Bale",
    text: "UI/UX Designer",
    image:Sliderimg2,
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
];
  return (
    
    <div className="">
       <div className=" p-5  ml- 2 md:ml-10 ">
        <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" to="/">
    Home
  </Link>
  
  <Typography sx={{ color: 'text.primary' }}>About</Typography>
</Breadcrumbs>
      </div>
      {/* Body Cotent Start */}
    <div className="bg-white flex flex-col md:flex-row h-screen justify-evenly items-center">
     

      {/* Right form */}
      <div className="w-full p-5 mx-10 md:w-1/2 flex flex-col justify-center  space-y-6 ">
        <h1 className="text-md font-bold sm:text-2xl md:text-3xl lg:text-4xl  ">Our Story</h1>
        <p className="mt-5">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.</p>
        </div>
        
         
     
<div className="w-full md:w-2/3 mt-6 h-full overflow-hidden flex justify-center items-center">
  <img
    src={pic}
    alt="About"
    className="w-full h-auto px-4 md:px-0 md:h-full object-cover"
  />
</div>
      
    </div>
    {/* Hero section  End */}
    {/* Card Section Start */}
    <div className="grid my-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-10 ">
      <div className="p-5 m-5 group text-black text-center border border-gray-500 hover:bg-red-500 duration-500 hover:text-white shadow-md  transition-transform ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full group-hover:bg-white ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               transition-all duration-800 transform 
               group-hover:bg-white group-hover:scale-110">
            <img src={pic2} alt="" className="p-1 filter invert transition duration-700 group-hover:filter-none " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black group-hover:text-white ">10.5K+</h2>
        <p className="text-gray-600 group-hover:text-white ">Sellers active our site</p>
      </div>
        <div className="p-5 m-5 group text-black text-center border border-gray-500 hover:bg-red-500 duration-500 hover:text-white shadow-md  transition-transform ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full group-hover:bg-white ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               transition-all duration-800 transform 
               group-hover:bg-white group-hover:scale-110">
            <img src={pic3} alt="" className="p-1 filter invert transition duration-700 group-hover:filter-none " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black group-hover:text-white ">33K+</h2>
        <p className="text-gray-600 group-hover:text-white ">Monthly Product Sale</p>
      </div>
        <div className="p-5 m-5 group text-black text-center border border-gray-500 hover:bg-red-500 duration-500 hover:text-white shadow-md  transition-transform ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full group-hover:bg-white ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               transition-all duration-800 transform 
               group-hover:bg-white group-hover:scale-110">
            <img src={pic4} alt="" className="p-1 transition duration-700 group-hover:invert " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black group-hover:text-white ">45.5K+</h2>
        <p className="text-gray-600 group-hover:text-white ">Customer active in our site</p>
      </div>
        <div className="p-5 m-5 group text-black text-center border border-gray-500 hover:bg-red-500 duration-500 hover:text-white shadow-md  transition-transform ease-in-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full group-hover:bg-white ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               transition-all duration-800 transform 
               group-hover:bg-white group-hover:scale-110">
            <img src={pic5} alt="" className="p-1 transition duration-700 group-hover:invert " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black group-hover:text-white ">25K+</h2>
        <p className="text-gray-600 group-hover:text-white ">Annual gross sale in our site</p>
      </div>

    </div>
    
      {/* Slider Container */}
      <div className=" py-4 mx-16 ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        
        centeredSlides={true}
        
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
    320: { slidesPerView: 1 },
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
        className="mySwiper  "
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white w-50 ml-5 sm:w-80 h-full">
              <div className="bg-gray-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full py-2 h-60 sm:h-80 object-contain rounded-lg"
                />
              </div>
              <h2 className="text-2xl text-gray-700 p-3 font-semibold">{card.title}</h2>
              <p className="text-gray-600 px-3 mb-4">{card.text}</p>
              <div className="flex px-3 gap-4 my-4">
                <Facebook className="w-5 h-5 text-gray-700" />
                <Instagram className="w-5 h-5 text-gray-700" />
                <Twitter className="w-5 h-5 text-gray-700" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
         
      {/* Cards Container */}
      
      
    
    {/* Additional Info Section Start */}
    <div className="grid my-20 grid-col-1 sm:grid-cols-2 md:grid-cols-3 px-10 ">
      <div className="p-5 m-5  text-black text-center  hover:border hover:border-gray-500">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               ">
            <img src={pic6} alt="" className="p-1   " />
          </div>
          </div>
        </div>
        <h2 className="text-lg font-bold text-black">FREE AND FAST DELIVERY</h2>
        <p className="text-gray-600  ">Free delivery for all orders over $140</p>
      </div>
        <div className="p-5 m-5  text-black text-center hover:border hover:border-gray-500 ">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               ">
            <img src={pic7} alt="" className="p-1  " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black">24/7 CUSTOMER SERVICE</h2>
        <p className="text-gray-600  ">Friendly 24/7 customer support</p>
      </div>
         <div className="p-5 m-5  text-black text-center hover:border hover:border-gray-500">
         <div className="flex p-4 justify-center items-center">
          <div className="h-16 w-16  bg-gray-300 flex justify-center items-center text-white rounded-full ">
            <div className=" p-1 h-12 w-12 bg-black text-white rounded-full 
               ">
            <img src={pic8} alt="" className="p-1   " />
          </div>
          </div>
        </div>
        <h2 className="text-xl font-bold text-black">MONEY BACK GUARANTEE</h2>
        <p className="text-gray-600  ">We return money within 30 days</p>
      </div>
       

    </div>
    {/* Additional Info Section End  */}

    </div>
    
    
  );
};

export default About;
