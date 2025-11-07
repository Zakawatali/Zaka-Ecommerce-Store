import{BrowserRouter as Router,Routes,Route}from'react-router-dom';
  
 import Home from './pages/Home.jsx'; 
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Navbar from './Component/Navbar.jsx';
import Footer from './Component/Footer.jsx';
import LoginPage from './pages/LogInPage.jsx';
import SignUp from './pages/SignUp.jsx';
import MyAccount from './pages/MyAccount.jsx';


function App() {
  

  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/LogInPage' element={<LoginPage/>}/>
        <Route path='/My-account' element={<MyAccount/>}/>
      </Routes>
      <Footer />
  
   


    </>
  );
}


export default App;
