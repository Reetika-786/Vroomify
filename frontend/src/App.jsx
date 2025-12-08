import React, { useEffect, useState } from 'react';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/signUp';
import ContactPage from './pages/ContactPage';
import CarPage from './pages/CarPage'
import CarDetails from './components/CarDetail';
import CarDetailPage from './pages/CarDetailPage';
import { FaArrowUp } from 'react-icons/fa';


//protected route
const ProtectedRoute = ({children}) => {
  const location = useLocation();
  const authToken = localStorage.getItem("authToken");

  if(! authToken){
    return <Navigate to ='/login' replace state = {{from : location.pathname}} />;
  }
  return children;
};

const RedirectIfAuthenticated = ({children}) => {
  const authToken = localStorage.getItem('token');
  if(authToken){
    return <Navigate to='/' replace />;
  }
  return children;
};

const App = () => {

  const [showButton, setShowButton] = useState(false);
  const location = useLocation();

  useEffect(() =>{
    window.scrollTo({top: 0, left:0, behaviour:'smooth'});
   } , [location.pathname]);

    //show hide btn on scroll
    useEffect(() => {
      const handleScroll = () => setShowButton(window.scrollY > 300);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollUp = () => {
      window.scrollTo({top:0, behavior : "smooth"});
    };

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path= '/Login' element = {<Login />} ></Route>
      <Route path= '/Signup' element = {<SignUp />} ></Route>
      <Route path= '/Contact' element = {<ContactPage />} ></Route>
      <Route path= '/Cars' element = {<CarPage />} ></Route>

      <Route
        path = "/cars/:id"
        element = {
          <ProtectedRoute>
            <CarDetailPage/>
          </ProtectedRoute>
        }
      />
    </Routes>

    {showButton && (
      <button onClick = {scrollUp} className='fixed cursor-pointer bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white shadow-lg transition-colors focus:outline-none' aria-label ="Scroll to top"
      >
      <FaArrowUp size = {20} />
      </button>
    )}
    </>
  );
};

export default App;
