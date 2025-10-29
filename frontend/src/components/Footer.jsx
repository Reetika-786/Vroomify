import React from 'react'
import { footerStyles as styles } from '../assets/dummyStyles'
import { Link } from 'react-router-dom'
import logo from '../assets/logocar.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className = {styles.container}>
        <div className={styles.topElements}>
            <div className={styles.circle1} />
            <div className={styles.circle2} />
            <div className={styles.roadLine} />
        </div> 

        <div className={styles.innerContainer}>
            <div className={styles.grid}>
                <div className={styles.brandSection}>
                    <Link to='/' className='flex items-center'>
                        <div className={styles.logoContainer}>
                            <img src={logo} alt = "logo" className='h-[1em] w-auto block'
                            style={{
                                display : "block",
                                objectFit: "contain"
                            }}
                            />
                            <span className = {styles.logoText}>  KARZONE</span>
                        </div>
                    </Link>
                    <p className={styles.description}>
                        Premium car rental service with the latest models and exceptional customer services. Drive your dream car today!
                    </p>

                    <div className={styles.socialIcons}>
                        {
                            [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
                                <a href = "#" key = {i} className = {styles.socialIcon}>
                                    <Icon />
                                </a>
                            ))
                        }
                    </div>
                </div>

                {/*Quick Links */}
                
            </div>
        </div>
    </footer>
  )
}

export default Footer
