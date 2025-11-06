import { Facebook,Instagram,Linkedin,Twitch,Send } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-black text-gray-50 py-6 mt-10 justify-center">
     <div className=" flex flex-col p-7 justify-between md:flex-row space-y-6  mx-10">
        <div className="space-y-3">
            <h1 className="text-2xl font-medium">Exclusive</h1>
            <p>Subscribe</p>
            <p>Get 10% off your first day.</p>
            <span>   <div className="relative w-70 flex items-center">
        
        <input
          type="text"
          placeholder="Enter your email"
          className="  pl-10 px-4 bg-black text-gray-400 border-1 py-2   rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Send className="hidden  sm:inline-block absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
      </div></span>

        </div>
        <div className="space-y-3">
            <h1 className="text-2xl font-medium">Support</h1>
            <p>111 ABC Sarani , Dhaska DH , UK</p>
             <p>exclusive@gmail.com</p>
              <p>+92 79389 992</p>

        </div>
         <div className="space-y-3">
            <h1 className="text-2xl font-medium">Account</h1>
            <p>My Account</p>
            <p>Login</p>
             <p>Cart</p>
              <p>Whishlist</p>
              <p><p>Shop</p></p>

        </div>
         
        <div className="space-y-3">
            <h1 className="text-2xl font-medium">Quick Link</h1>
            <p><a href="/privacy">Privacy Policy</a></p>
            <p><a href="/term">Terms of Use</a></p>
            <p><a href="/faq">FAQ</a></p>
            <p><a href="/contact">Contact</a></p>

        </div>
        <div className="space-y-3">
            <h1 className="text-2xl font-medium">Download App</h1>
            <p>Save $3 With App New User..</p>
            <p>Get 10% off your first day.</p>
            <div className="flex gap-2">
              <img className="h-30 w-30" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoXgnU7FduTcy0Z7GyoXnMnCqLBwMwAXdiFw&s" alt="Google Play Store Badge" />
              <img className="h-30 bg-black w-30" src="https://e7.pngegg.com/pngimages/912/1019/png-clipart-app-store-google-play-apple-apple-text-logo.png" alt="Apple App Store Badge" />
            </div>
            <div className="flex mt-4 gap-2 items-center">
                <Facebook className="w-5 h-5 mr-2"/>
                <Instagram className="w-5 h-5 mr-2"/>
                <Twitch className="w-5 h-5 mr-2"/>
                 <Linkedin className="w-5 h-5 mr-2"/>

            </div>

        </div>
     </div>
     
     <div className="flex flex-col items-center justify-center p-4 mt-7  1px border-w-60 border-gray-700">
        <div className=" w-5xl border-t border-gray-600"></div>
        <p className="p-5 text-sm text-gray-300">Copyright All Rights Reserved By ZakaAnpavi 2025</p>
     </div>
    </footer>
                        

)
                        }
export default Footer;