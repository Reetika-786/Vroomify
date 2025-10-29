import React , {useState, useEffect} from 'react'
import { loginStyles } from '../assets/dummyStyles'
import {useLocation, useNavigate} from 'react-router-dom';
import logo from '../assets/logocar.png';
import { FaArrowLeft , FaUser, FaLock,FaEye, FaEyeSlash} from 'react-icons/fa';
import {toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        setIsActive(true);
      }, []);

    const handleChange = (e) => {
        setCredentials((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log('login details' , credentials);
        localStorage.setItem('authToken', 'sampleauthtoken12345');     
        toast.success('Login Successful! Welcome back', {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        onClose: () => {
            const redirectPath = location.state?.from || '/';
            navigate(redirectPath, { replace: true });
        }
    });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

  return (
    <div className = {loginStyles.pageContainer}>
    <div className={loginStyles.animatedBackground.base}>
        {/*animated dark background*/}
        <div className={`${loginStyles.animatedBackground.orb1} ${isActive ? 'translate-x-20 translate-y-10' : ''}`}/>
        <div className={`${loginStyles.animatedBackground.orb2} ${isActive ? '-translate-x-20 -translate-y-10' : ''}`}/>
        <div className={`${loginStyles.animatedBackground.orb3} ${isActive ? '-translate-x-10 translate-y-20' : ''}`}/>
      </div>

      <a href="/" className = {loginStyles.backButton}>
        <FaArrowLeft className = 'text-sm sm:text-base' />
        <span className="font-medium text-xs sm:text-sm">
            Back to Home
        </span>
      </a>
       
       {/* Login Card */}
        <div className = {`${loginStyles.loginCard.container} ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
        >
            <div className={loginStyles.loginCard.card}>
                <div className={loginStyles.loginCard.decor1} />
                <div className={loginStyles.loginCard.decor2} />

                {/* header */}
                 <div className={loginStyles.loginCard.headerContainer}>
                    <div className={loginStyles.loginCard.logoContainer}>
                        <div className={loginStyles.loginCard.logoText}>
                            <img src={logo} alt="logo"  className = "h-[1em] w-auto block" 
                            style={{
                                display :"block",
                                objectFit: "contain"
                            }}
                            />
                            <span className="font-bold tracking-wider">
                                VROOMIFY
                            </span>
                        </div>
                    </div>
                    
                    <h1 className={loginStyles.loginCard.title}>
                        Premium Drive
                    </h1>
                    <p className={loginStyles.loginCard.subtitle}>
                        LUXURY MOBILITY EXPERIENCE
                    </p>
                 </div>

                 {/* Form */}
                 <form onSubmit={handleSubmit} className = {loginStyles.form.container}>
                    <div className={loginStyles.form.inputContainer}>
                        <div className={loginStyles.form.inputWrapper}>
                            <div className={loginStyles.form.inputIcon}>
                                <FaUser />
                            </div>
                            <input 
                            type="email" 
                            name = "email" 
                            value = {credentials.email} 
                            onChange={handleChange} 
                            placeholder = "Enter your email" 
                            required className ={loginStyles.form.input}
                            />
                        </div>
                    </div>

                    <div className={loginStyles.form.inputContainer}>
                        <div className={loginStyles.form.inputWrapper}>
                            <div className={loginStyles.form.inputIcon}>
                                <FaLock />
                            </div>
                            <input 
                            type= {showPassword ? "text" : "password"}
                            name = "password" 
                            value = {credentials.password} 
                            onChange={handleChange} 
                            placeholder = "Enter your password" 
                            required className ={loginStyles.form.input}
                            />

                            <div onClick={togglePasswordVisibility}
                            className={loginStyles.form.passwordToggle}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div> 
                        </div>
                    </div>
                    <button type = "submit" className={loginStyles.form.submitButton}>
                        <span className={loginStyles.form.buttonText}>
                            ACCESS PREMIUM GARAGE
                        </span>
                        <div className = {loginStyles.form.buttonHover}/>
                    </button>
                 </form>

                {/*signup section */}
                <div className={loginStyles.signupSection}>
                    <p className={loginStyles.signupText}>
                        Don't have an account?
                    </p>
                    <a href="/signup" className={loginStyles.signupButton}>
                        CREATE ACCOUNT
                    </a>
                </div>
            </div>
        </div>

        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        toastStyle={{
          backgroundColor: '#fb923c',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(249, 115, 22, 0.25)'
        }}
      />
      </div>
  )
}

export default Login
